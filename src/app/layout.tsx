import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";

const SITE_URL = "https://maat.work";
const SITE_NAME = "MaatWork";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070a12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MaatWork — Software real para operar empresas argentinas",
    template: "%s · MaatWork",
  },
  description:
    "MaatWork diseña y opera sistemas verticales reales para empresas argentinas: NMS, MaatWorkCRM, Infrannova, Varigas, automatización, WhatsApp, cobros y gestión diaria.",
  keywords: [
    "automatización comercial",
    "software vertical Argentina",
    "sistema de turnos",
    "CRM Argentina",
    "software para obras",
    "software para natatorios",
    "gestión de cobros",
    "agenda online",
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
    title: "MaatWork — Software real para operar empresas argentinas",
    description:
      "Ecosistema real de productos: NMS, MaatWorkCRM, Infrannova y Varigas.",
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
    title: "MaatWork — Software real para operar empresas argentinas",
    description:
      "NMS, MaatWorkCRM, Infrannova y Varigas: productos reales para operar empresas argentinas.",
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
      logo: `${SITE_URL}/favicon.svg`,
      description:
        "SaaS de automatización comercial para negocios con turnos en Argentina.",
      address: { "@type": "PostalAddress", addressCountry: "AR" },
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Automatización comercial todo-en-uno: agenda, CRM, cobros, WhatsApp y dashboard para negocios con turnos.",
      offers: {
        "@type": "Offer",
        price: "59",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
      },
      provider: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto tarda la implementación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entre 5 y 10 días hábiles. La primera llamada es de 30 minutos, configuramos el sistema con tus datos y te dejamos operando.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito tarjeta para probar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Los 14 días son gratis y no pedimos tarjeta.",
          },
        },
        {
          "@type": "Question",
          name: "¿Sirve para mi rubro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve para gimnasios, estudios de fitness, salones, barberías, academias y negocios con turnos, cobros recurrentes y clientes que atender.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo migrar desde otro sistema?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Importamos tu base de clientes y turnos desde Excel, Google Sheets o cualquier sistema con exportación de datos.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" hrefLang="es-AR" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <RevealOnScroll />
        <AnalyticsEvents />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
