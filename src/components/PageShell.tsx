/**
 * PageShell — chrome compartido para subpáginas (servicios, casos, soluciones,
 * blog). Reusa el mismo fondo, navbar, footer y CTA sticky que la home, así las
 * páginas internas se ven nativas sin duplicar layout. Server component.
 */
import type { ReactNode } from "react";
import { OperationalField } from "./OperationalField";
import { ScrollProgress } from "./ScrollProgress";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyWhatsApp } from "./StickyWhatsApp";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <OperationalField />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
