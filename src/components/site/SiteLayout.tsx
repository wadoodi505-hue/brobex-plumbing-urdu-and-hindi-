import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";
import { LanguageProvider } from "./LanguageContext";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}
