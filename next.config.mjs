import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Fix Next 16 inferring wrong workspace root when there's a parent
  // lockfile (e.g. /Users/prueba/.hermes/package-lock.json) — that
  // confuses Turbopack and breaks SSR for /_global-error and /_not-found.
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
