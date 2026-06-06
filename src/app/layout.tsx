import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const SITE_URL = "https://maatwork.com.ar";
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
  themeColor: "#0f0520",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MaatWork — Automatiza tu local. Sin complicaciones.",
    template: "%s · MaatWork",
  },
  description:
    "El SaaS de automatización comercial que eligen gyms, salones y academias en Argentina. Agenda, cobros, CRM y WhatsApp en un solo lugar. USD 59/mes, todo incluido.",
  keywords: [
    "automatización comercial",
    "software para gimnasios",
    "sistema de turnos",
    "CRM Argentina",
    "software para salones",
    "software para academias",
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
    title: "MaatWork — Automatiza tu local. Sin complicaciones.",
    description:
      "El SaaS que gyms, salones y academias eligen en Argentina. USD 59/mes, todo incluido.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaatWork — Automatiza tu local. Sin complicaciones.",
    description:
      "El SaaS que gyms, salones y academias eligen en Argentina. USD 59/mes.",
    images: ["/og.png"],
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
      logo: `${SITE_URL}/logo.png`,
      description:
        "SaaS de automatización comercial para gyms, salones y academias en Argentina.",
      address: { "@type": "PostalAddress", addressCountry: "AR" },
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Automatización comercial todo-en-uno: agenda, CRM, cobros, WhatsApp y dashboard para gyms, salones y academias.",
      offers: {
        "@type": "Offer",
        price: "59",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "349",
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
      </body>
    </html>
  );
}
