import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/data/posts";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageCTA } from "@/components/subpage";

const SITE_URL = "https://maat.work";
const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} de ${MONTHS[m - 1]} de ${y}`;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: `${p.title} · MaatWork`,
      description: p.metaDescription,
      url: `${SITE_URL}/blog/${p.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const pageUrl = `${SITE_URL}/blog/${p.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline: p.title,
        description: p.metaDescription,
        datePublished: p.date,
        dateModified: p.date,
        inLanguage: "es-AR",
        author: { "@type": "Organization", name: "MaatWork", url: SITE_URL },
        publisher: { "@type": "Organization", name: "MaatWork", url: SITE_URL },
        mainEntityOfPage: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: p.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }, { name: p.title, href: `/blog/${p.slug}` }]} />

      <article className="section-base section-chroma">
        <div className="container-maat max-w-[720px] pt-10 pb-8 md:pt-12">
          <span className="eyebrow">Blog · {formatDate(p.date)}</span>
          <h1
            className="mt-3 font-display text-3xl text-white text-balance md:text-[42px]"
            style={{ fontWeight: 800, letterSpacing: "var(--tracking-display)", lineHeight: 1.08 }}
          >
            {p.title}
          </h1>
          <p className="mt-5 text-[17px] leading-8 text-slate-300">{p.excerpt}</p>
        </div>

        <div className="container-maat max-w-[720px] pb-16">
          {p.body.map((section, idx) => (
            <section key={idx} className="mt-8 first:mt-0">
              {section.heading && (
                <h2 className="font-display text-[22px] font-extrabold tracking-[-0.02em] text-white">
                  {section.heading}
                </h2>
              )}
              {section.paras.map((para, i) => (
                <p key={i} className="mt-3 text-[16px] leading-8 text-slate-300">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <PageCTA
        title="¿Lo llevamos a tu negocio?"
        text="Contanos qué necesitás y te mostramos lo que ya construimos funcionando."
        ctaMsg="quiero contarles un proyecto"
      />
    </PageShell>
  );
}
