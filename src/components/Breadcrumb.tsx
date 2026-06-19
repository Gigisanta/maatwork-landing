/**
 * Breadcrumb — visible trail + BreadcrumbList JSON-LD for subpages. `items`
 * is the trail after "Inicio" (which is prepended). The last item is the
 * current page (not a link). Server component.
 */
const SITE_URL = "https://maat.work";

export type Crumb = { name: string; href: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Inicio", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  };

  return (
    <nav aria-label="Migas de pan" className="container-maat pt-24 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-500">
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i < all.length - 1 ? (
              <a href={c.href} className="transition-colors hover:text-violet-300">{c.name}</a>
            ) : (
              <span className="text-slate-300" aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
