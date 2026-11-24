import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems, type NavItem } from "./nav-items";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { siteConfig } from "../../data/site";
import { cn } from "../../utils/cn";
import { useScrolledState } from "../../animations/navAnimations";

function resolveHref(item: NavItem, isHome: boolean) {
  if (item.to) return item.to;
  return isHome ? `#${item.hash}` : `/#${item.hash}`;
}

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const scrolled = useScrolledState(12);

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isAcademy = location.pathname.startsWith("/protechub");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const goToContact = () => {
    const contact = document.getElementById("contato");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    } else if (isAcademy) {
      navigate("/protechub#contato-academy");
    } else {
      navigate("/#contato");
    }
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-institutional)]/95 py-3 shadow-lg backdrop-blur-sm"
          : "bg-transparent py-5",
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link
          to="/"
          data-nav="logo"
          className="flex items-center gap-2.5"
          aria-label="ProtecSeg — página inicial"
        >
          <img
            src={siteConfig.logo.dark}
            alt="ProtecSeg — Segurança do Trabalho"
            className="h-14 w-auto sm:h-16"
          />
          {isAcademy ? (
            <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              ProtecHub
            </span>
          ) : null}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                data-nav="link"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={resolveHref(item, isHome)}
                data-nav="link"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex" data-nav="cta">
          <Button variant="primary" onClick={goToContact}>
            Falar com especialista
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[var(--color-institutional)] px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={resolveHref(item, isHome)}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="mt-4">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                setMenuOpen(false);
                goToContact();
              }}
            >
              Falar com especialista
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
