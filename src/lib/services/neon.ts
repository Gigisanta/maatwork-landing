import { neon } from "@neondatabase/serverless";
import type { LeadInput } from "@/lib/schemas/lead.schema";

export type LeadRecord = LeadInput & {
  id?: string;
  created_at?: string;
  metadata?: Record<string, unknown>;
};

/**
 * Persist a lead in Neon when DATABASE_URL exists.
 *
 * The landing must still deploy in zero-cost/static contexts, so missing
 * DATABASE_URL is intentionally treated as accepted-but-not-persisted.
 */
export async function createLead(input: LeadInput, metadata: Record<string, unknown> = {}): Promise<LeadRecord> {
  // `necesidad` (tipo de proyecto) no tiene columna propia → se persiste en el
  // jsonb `metadata`, evitando una migración de la tabla `leads` en producción.
  const meta = { ...metadata, necesidad: input.necesidad };
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return { ...input, metadata: meta, created_at: new Date().toISOString() };
  }

  const sql = neon(databaseUrl);
  const rows = await sql`
    INSERT INTO leads (
      nombre,
      whatsapp,
      email,
      rubro,
      problema,
      source,
      utm_source,
      utm_medium,
      utm_campaign,
      metadata
    ) VALUES (
      ${input.nombre},
      ${input.whatsapp},
      ${input.email || null},
      ${input.rubro || null},
      ${input.problema || null},
      ${input.source},
      ${input.utm_source || null},
      ${input.utm_medium || null},
      ${input.utm_campaign || null},
      ${JSON.stringify(meta)}::jsonb
    )
    RETURNING id, created_at
  `;

  const row = rows[0] as { id?: string; created_at?: string } | undefined;
  return { ...input, ...row, metadata: meta };
}
