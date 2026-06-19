import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustry } from "@/data/industries";
import { getCase } from "@/data/cases";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, CheckList, FaqList, PageCTA } from "@/components/subpage";

const SITE_URL = "https://maat.work";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return {
    title: i.metaTitle,
    description: i.metaDescription,
    alternates: { canonical: `/soluciones/${i.slug}` },
    openGraph: {
      title: `${i.metaTitle} · MaatWork`,
      description: i.metaDescription,
      url: `${SITE_URL}/soluciones/${i.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();
  const proofCase = i.proofCaseSlug ? getCase(i.proofCaseSlug) : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: i.h1,
    serviceType: i.name,
    description: i.metaDescription,
    provider: { "@type": "Organization", name: "MaatWork", url: SITE_URL },
    areaServed: "AR",
    url: `${SITE_URL}/soluciones/${i.slug}`,
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ name: "Soluciones", href: "/soluciones" }, { name: i.name, href: `/soluciones/${i.slug}` }]} />
      <PageHero
        eyebrow={`Solución · ${i.name}`}
        h1={i.h1}
        intro={i.intro}
        ctaMsg={`tengo un negocio de ${i.name.toLowerCase()} y quiero ordenar mi operación`}
      />

      <section className="section-base section-pad">
        <div className="container-maat max-w-[760px]">
          <span className="eyebrow">El problema</span>
          <ul className="mt-6 space-y-2.5">
            {i.pains.map((p) => (
              <li key={p} className="signal-row">
                <span className="signal-dot signal-dot--warning dot-pulse" aria-hidden />
                <span className="text-[15px] text-slate-300">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CheckList title="Lo que construimos para vos" items={i.build} />

      <section className="section-base section-pad">
        <div className="container-maat max-w-[760px]">
          <span className="eyebrow">Prueba</span>
          <p className="mt-3 text-[16px] leading-8 text-slate-300">{i.proofText}</p>
          {proofCase && (
            <a
              href={`/casos/${proofCase.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.08em] text-violet-300 transition-colors hover:text-violet-200"
            >
              Ver el caso {proofCase.product}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          )}
        </div>
      </section>

      <FaqList faqs={i.faqs} />
      <PageCTA
        title={`¿Armamos el software de tu ${i.name.toLowerCase()}?`}
        text="Contanos cómo trabajás y te mostramos lo que ya construimos funcionando."
        ctaMsg={`tengo un negocio de ${i.name.toLowerCase()} y quiero ordenar mi operación`}
      />
    </PageShell>
  );
}
