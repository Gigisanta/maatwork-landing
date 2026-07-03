import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Sora, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { SERIOUS_PROJECT_COUNT } from "@/data/products";

const SITE_URL = "https://maat.work";
const SITE_NAME = "MaatWork";
const BRAND_THEME_COLOR = "#0A0A11";
const ICON_VERSION = "maatwork-ds-logo-20260618-v2";

// MaatWork Design System type stack — Sora (display) · Hanken Grotesk
// (body) · JetBrains Mono (data/labels). Self-hosted via next/font.
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: BRAND_THEME_COLOR },
    { media: "(prefers-color-scheme: dark)", color: BRAND_THEME_COLOR },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MaatWork — Estudio de software a medida y automatización",
    template: "%s · MaatWork",
  },
  description:
    `Software simple para ordenar negocios con WhatsApp, Excel y procesos manuales. ${SERIOUS_PROJECT_COUNT} proyectos publicados en Vercel.`,
  icons: {
    icon: [
      { url: `/favicon-ds-32x32.png?v=${ICON_VERSION}`, sizes: "32x32", type: "image/png" },
      { url: `/favicon-ds.ico?v=${ICON_VERSION}`, sizes: "any" },
      { url: `/logo-mark.svg?v=${ICON_VERSION}`, type: "image/svg+xml" },
      { url: `/icon-ds-192.png?v=${ICON_VERSION}`, sizes: "192x192", type: "image/png" },
    ],
    shortcut: `/favicon-ds.ico?v=${ICON_VERSION}`,
    apple: [{ url: `/apple-touch-icon-ds.png?v=${ICON_VERSION}`, sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: `/safari-pinned-tab.svg?v=${ICON_VERSION}`, color: "#E8B23C" }],
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  keywords: [
    "desarrollo de software a medida",
    "software a medida argentina",
    "estudio de software",
    "fábrica de software",
    "automatización de procesos",
    "automatización con inteligencia artificial",
    "desarrollo de apps a medida",
    "integración de sistemas",
    "automatización de WhatsApp",
    "software de gestión",
  ],
  authors: [{ name: "MaatWork", url: SITE_URL }],
  creator: "MaatWork",
  publisher: "MaatWork",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
    languages: { "es-AR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "MaatWork — Estudio de software a medida y automatización",
    description:
      `Software a medida para ordenar operaciones: CRM, agenda, cobros, WhatsApp, tableros y landings. ${SERIOUS_PROJECT_COUNT} proyectos publicados en Vercel.`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaatWork — Estudio de software a medida y automatización",
    description:
      `CRM, agenda, cobros, WhatsApp, tableros y landings. ${SERIOUS_PROJECT_COUNT} proyectos publicados en Vercel.`,
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Business Software",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-mark.svg`,
      description:
        "Software a medida para ordenar y automatizar operaciones reales.",
      founder: {
        "@type": "Person",
        name: "Giolivo Santarelli",
        alternateName: "Giolivo Garcia",
        sameAs: ["https://www.linkedin.com/in/giolivo-garcia-451954322/"],
      },

      address: { "@type": "PostalAddress", addressCountry: "AR" },
      areaServed: "AR",
      sameAs: ["https://www.instagram.com/maat.work/"],
      knowsAbout: [
        "Desarrollo de software a medida",
        "Automatización de procesos",
        "Integración de sistemas",
        "Inteligencia artificial aplicada",
        "Facturación electrónica ARCA/AFIP",
      ],
      makesOffer: {
        "@type": "OfferCatalog",
        name: "Servicios",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo de software a medida" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatizaciones e IA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integraciones y facturación ARCA/AFIP" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Producto base operativo" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-AR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: `${SITE_NAME} — Producto base operativo`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Producto base operativo de MaatWork: agenda, clientes, cobros y tablero de control. Punto de entrada desde USD 100/mes; el alcance avanzado se desarrolla y cotiza a medida.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "100",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
      },
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${sora.variable} ${hanken.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Warm DNS for the WhatsApp CTA (primary conversion path) */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="alternate" hrefLang="es-AR" href={SITE_URL} />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="MaatWork facts for AI agents" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="MaatWork full text for AI agents" />
        <link rel="ai-catalog" href="/.well-known/ai-catalog.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Saltar al contenido</a>
        {children}
        <RevealOnScroll />
        <AnalyticsEvents />
        <Suspense fallback={null}>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
