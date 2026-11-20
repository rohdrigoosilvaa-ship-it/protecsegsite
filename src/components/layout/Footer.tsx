import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "../ui/SocialIcons";
import { Container } from "../ui/Container";
import { navItems } from "./nav-items";
import { siteConfig } from "../../data/site";
import { useScrollReveal } from "../../animations/scrollAnimations";

const academyLinks = [
  { label: "Início", href: "/protechub" },
  { label: "Treinamentos", href: "/protechub#catalogo" },
  { label: "Contato", href: "/protechub#contato-academy" },
];

export function Footer() {
  const location = useLocation();
  const isAcademy = location.pathname.startsWith("/protechub");
  const ref = useScrollReveal<HTMLElement>({ y: 16, duration: 0.6, start: "top 95%" });

  return (
    <footer ref={ref} className="bg-[var(--color-ink)] pb-8 pt-16 text-white/70">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link to={isAcademy ? "/protechub" : "/"} className="inline-flex items-center gap-2.5">
              <img
                src={siteConfig.logo.dark}
                alt="ProtecSeg — Segurança do Trabalho"
                className="h-16 w-auto"
              />
              {isAcademy ? (
                <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  ProtecHub
                </span>
              ) : null}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {isAcademy
                ? "ProtecHub — plataforma de capacitação em Segurança e Saúde no Trabalho."
                : "Consultoria em Segurança do Trabalho. Da conformidade à inteligência."}
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navegação</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {isAcademy
                ? academyLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="transition-colors hover:text-white">
                        {item.label}
                      </a>
                    </li>
                  ))
                : navItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.to ?? `#${item.hash}`}
                        className="transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[var(--color-green)]" />
                {siteConfig.phoneDisplay}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[var(--color-green)]" />
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[var(--color-green)]" />
                {siteConfig.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row">
          <p>
            &copy; 2026 ProtecSeg Consultoria em Segurança do Trabalho.
            {isAcademy ? " ProtecHub é um produto ProtecSeg." : ""}
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Termos de Uso
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const isPlaceholder = href.startsWith("[");

  return (
    <a
      href={isPlaceholder ? "#" : href}
      aria-disabled={isPlaceholder}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-colors hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
    >
      {children}
    </a>
  );
}
