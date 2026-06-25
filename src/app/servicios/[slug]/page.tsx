import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/data/services";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, ProseBlock, CheckList, FaqList, PageCTA } from "@/components/subpage";

const SITE_URL = "https://maat.work";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: {
      title: `${s.metaTitle} · MaatWork`,
      description: s.metaDescription,
      url: `${SITE_URL}/servicios/${s.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const pageUrl = `${SITE_URL}/servicios/${s.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: s.name,
        serviceType: s.name,
        description: s.metaDescription,
        provider: { "@type": "Organization", name: "MaatWork", url: SITE_URL },
        areaServed: "AR",
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: s.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE_URL}/servicios` },
          { "@type": "ListItem", position: 3, name: s.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ name: "Servicios", href: "/servicios" }, { name: s.name, href: `/servicios/${s.slug}` }]} />
      <PageHero eyebrow="Servicio" h1={s.h1} intro={s.intro} ctaMsg={s.ctaMsg} />
      <ProseBlock eyebrow="Para quién" title="¿Para quién es?">{s.forWhom}</ProseBlock>
      <CheckList title="Qué incluye" items={s.includes} />
      <ProseBlock eyebrow="Prueba" title="Ya está funcionando">{s.proof}</ProseBlock>
      <FaqList faqs={s.faqs} />
      <PageCTA
        title="¿Lo armamos para tu negocio?"
        text="Contanos qué necesitás y te mostramos lo que ya construimos funcionando."
        ctaMsg={s.ctaMsg}
      />
    </PageShell>
  );
}
