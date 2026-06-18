import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Sora, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { FAQS } from "@/data/faqs";

const SITE_URL = "https://maat.work";
const SITE_NAME = "MaatWork";

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
  themeColor: "#0A0A11",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MaatWork — Plataforma operativa para agenda, cobros y clientes",
    template: "%s · MaatWork",
  },
  description:
    "Plataforma operativa para negocios con agenda, cobros y clientes recurrentes. Implementación guiada con soporte local en español. 14 días gratis, sin tarjeta.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "software de gestión",
    "sistema de turnos",
    "agenda online",
    "gestión de cobros",
    "CRM Argentina",
    "WhatsApp para negocios",
    "software para gimnasios",
    "automatización comercial",
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
    title: "MaatWork — Plataforma operativa para agenda, cobros y clientes",
    description:
      "Agenda, cobros, clientes y recordatorios en un solo sistema. Implementación guiada con soporte local. 14 días gratis, sin tarjeta.",
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
    title: "MaatWork — Plataforma operativa para agenda, cobros y clientes",
    description:
      "Agenda, cobros, clientes y recordatorios en un solo sistema. 14 días gratis, sin tarjeta.",
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
        "Plataforma operativa para negocios con agenda, cobros y clientes recurrentes en Argentina.",
      address: { "@type": "PostalAddress", addressCountry: "AR" },
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Plataforma operativa todo-en-uno: agenda, clientes, cobros, automatización y tablero de control para negocios con turnos.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "100",
        priceCurrency: "USD",
        offerCount: 1,
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
      },
      provider: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Warm DNS for the WhatsApp CTA (primary conversion path) */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="alternate" hrefLang="es-AR" href={SITE_URL} />
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
