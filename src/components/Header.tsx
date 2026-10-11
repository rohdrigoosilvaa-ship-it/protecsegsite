import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "../lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", ...NAV_LINKS.map((l) => l.id)].map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "hero" ? "" : entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled && !open ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : scrolled ? "bg-transparent py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            aria-label="ProtecSeg - voltar ao início"
            className="relative z-50 shrink-0"
          >
            <img
              src={open ? "/logo-protecseg-reverse.png" : "/logo-protecseg-color.png"}
              alt="ProtecSeg Segurança do Trabalho"
              width={115}
              height={64}
              className={`w-auto transition-all duration-300 ${scrolled ? "h-12" : "h-16"}`}
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative text-sm font-medium transition-colors ${
                  active === link.id ? "text-brand-green" : "text-brand-gray-700 hover:text-brand-graphite"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-brand-green-dark"
            >
              Falar com especialista
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`relative z-50 md:hidden p-2 ${open ? "text-white" : "text-brand-graphite"}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-sm md:hidden"
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8 pt-16"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-2xl font-semibold text-white"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + NAV_LINKS.length * 0.07 }}
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-brand-green px-8 py-3 text-base font-semibold text-white"
              >
                Falar com especialista
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
