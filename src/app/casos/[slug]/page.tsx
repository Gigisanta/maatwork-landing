import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASES, getCase } from "@/data/cases";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, CheckList, ChipRow, PageCTA } from "@/components/subpage";

const SITE_URL = "https://maat.work";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/casos/${c.slug}` },
    openGraph: {
      title: `${c.metaTitle} · MaatWork`,
      description: c.metaDescription,
      url: `${SITE_URL}/casos/${c.slug}`,
    },
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const pageUrl = `${SITE_URL}/casos/${c.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: c.product,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: c.metaDescription,
        url: c.url,
        author: { "@type": "Organization", name: "MaatWork", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Casos", item: `${SITE_URL}/casos` },
          { "@type": "ListItem", position: 3, name: c.product, item: pageUrl },
        ],
      },
    ],
  };

  const blocks: { label: string; text: string }[] = [
    { label: "El contexto", text: c.context },
    { label: "El problema", text: c.problem },
    { label: "Lo que construimos", text: c.solution },
  ];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ name: "Casos", href: "/casos" }, { name: c.product, href: `/casos/${c.slug}` }]} />
      <PageHero
        eyebrow={`Caso · ${c.industry}`}
        h1={c.h1}
        intro={c.intro}
        ctaMsg={`vi el caso de ${c.product} y quiero algo así para mi negocio`}
        secondaryHref={c.url}
        secondaryLabel="Ver en vivo"
        secondaryExternal
      />

      <section className="section-base section-pad">
        <div className="container-maat grid max-w-[860px] gap-5 md:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.label} className="ops-card flex flex-col p-6">
              <span className="eyebrow">{b.label}</span>
              <p className="mt-3 text-[14.5px] leading-7 text-slate-300">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CheckList title="Módulos" items={c.modules} />
      <ChipRow label="Stack" items={c.stack} />
      <PageCTA
        title="¿Querés algo así para tu negocio?"
        text="Cada caso es un negocio distinto resuelto con software propio. Contanos el tuyo."
        ctaMsg={`vi el caso de ${c.product} y quiero algo así para mi negocio`}
      />
    </PageShell>
  );
}
