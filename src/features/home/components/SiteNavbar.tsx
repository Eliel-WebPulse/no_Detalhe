import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { navLinks, sectionOrder } from "../model/content";

const SiteNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = sectionOrder.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll <= 0 ? 0 : (scrollTop / maxScroll) * 100);
      setScrolled(scrollTop > 10);

      let currentSection = "hero";
      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const section = sectionIds[index];
        if (scrollTop + 120 >= section.offsetTop) {
          currentSection = section.id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = useMemo(
    () =>
      "fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
    []
  );

  return (
    <motion.header
      className={navClass}
      initial={{ y: -22, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        boxShadow: scrolled ? "0 10px 28px rgba(0,0,0,0.18)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="h-1 bg-muted">
        <div className="h-full bg-primary transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#hero" className="font-heading text-3xl font-bold uppercase tracking-[0.06em] text-foreground">
          No Detalhe
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5518936180780?text=Olá!%20Vi%20o%20site%20e%20quero%20agendar%20um%20serviço."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-2 py-2 text-sm ${
                  activeSection === link.id ? "bg-primary/15 text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </motion.header>
  );
};

export default SiteNavbar;
