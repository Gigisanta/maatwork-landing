import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOURCE_PAGES, getSourcePage } from "@/data/source-pages";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, CheckList, FaqList, PageCTA } from "@/components/subpage";

const SITE_URL = "https://maat.work";

export const dynamicParams = false;

export function generateStaticParams() {
  return SOURCE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSourcePage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      title: `${page.metaTitle} · MaatWork`,
      description: page.metaDescription,
      url: `${SITE_URL}/${page.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${page.h1} · MaatWork` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} · MaatWork`,
      description: page.metaDescription,
      images: ["/twitter-image.png"],
    },
  };
}

export default async function SourceClaimPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSourcePage(slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${page.slug}#webpage`,
        url: `${SITE_URL}/${page.slug}`,
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@type": "Thing", name: page.h1 },
        mainEntity: {
          "@type": "Claim",
          name: page.claim,
          appearance: `${SITE_URL}/${page.slug}`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/${page.slug}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: page.h1, item: `${SITE_URL}/${page.slug}` },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ name: page.h1, href: `/${page.slug}` }]} />
      <div className="doc-compact">
      <PageHero
        eyebrow={page.eyebrow}
        h1={page.h1}
        intro={page.intro}
        ctaMsg={page.ctaMsg}
        secondaryHref="/servicios"
        secondaryLabel="Ver servicios"
      />

      <section className="section-base section-pad">
        <div className="container-maat max-w-[820px]">
          <span className="eyebrow">Fuente oficial</span>
          <h2
            className="mt-3 font-display text-2xl text-white md:text-3xl"
            style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}
          >
            Dato citable
          </h2>
          <p className="mt-4 text-[17px] leading-8 text-slate-300">{page.claim}</p>
        </div>
      </section>

      <CheckList title="Datos concretos" items={page.facts} />

      <section className="section-base section-pad">
        <div className="container-maat grid max-w-[940px] gap-5 md:grid-cols-2">
          {page.sections.map((section) => (
            <article key={section.title} className="ops-card p-6">
              <h2
                className="font-display text-[22px] text-white"
                style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}
              >
                {section.title}
              </h2>
              <div className="mt-4 space-y-3 text-[15px] leading-7 text-slate-300">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-base pb-10">
        <div className="container-maat max-w-[820px]">
          <span className="eyebrow">Relacionado</span>
          <div className="mt-4 flex flex-wrap gap-2">
            {page.related.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-[13px] text-slate-200 transition-colors hover:border-violet-400/40 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <FaqList faqs={page.faqs} />
      <PageCTA
        title="¿Lo aplicamos a tu negocio?"
        text="Contanos cómo trabajás y te mostramos una base funcionando antes de convertirlo en un proyecto grande."
        ctaMsg={page.ctaMsg}
      />
      </div>
    </PageShell>
  );
}
