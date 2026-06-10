import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/schemas/lead.schema";
import { createLead } from "@/lib/services/neon";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
} as const;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN ?? "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }
  if (record.count >= MAX_REQUESTS) return false;
  record.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Rate limit exceeded" },
        { status: 429, headers: SECURITY_HEADERS },
      );
    }

    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, error: "Invalid content type" },
        { status: 400, headers: SECURITY_HEADERS },
      );
    }

    const body = await request.json();
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Validation error", details: parsed.error.flatten().fieldErrors },
        { status: 422, headers: SECURITY_HEADERS },
      );
    }

    const lead = await createLead(parsed.data, {
      ip,
      userAgent: request.headers.get("user-agent"),
      referer: request.headers.get("referer"),
    });

    return NextResponse.json(
      { success: true, data: lead, persisted: Boolean(process.env.DATABASE_URL) },
      { status: process.env.DATABASE_URL ? 201 : 202, headers: SECURITY_HEADERS },
    );
  } catch (error) {
    console.error("[api/leads]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500, headers: SECURITY_HEADERS },
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: { ...SECURITY_HEADERS, ...CORS_HEADERS } });
}
