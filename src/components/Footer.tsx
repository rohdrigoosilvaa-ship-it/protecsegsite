import { Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../lib/content";

const Instagram = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <img
              src="/logo-protecseg-reverse.png"
              alt="ProtecSeg Segurança do Trabalho"
              width={212}
              height={118}
              loading="lazy"
              className="h-[118px] w-auto"
            />
            <p className="mt-4 text-sm text-brand-gray-300 max-w-xs">
              Consultoria em Segurança do Trabalho com tecnologia para prevenção contínua.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4">Navegação</p>
            <ul className="space-y-2 text-sm text-brand-gray-300">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Contato</p>
            <ul className="space-y-3 text-sm text-brand-gray-300">
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-brand-green" />
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors"
                >
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-green" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-brand-green transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-green" />
                {CONTACT.location}
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Redes sociais</p>
            <div className="flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-graphite transition-colors hover:bg-brand-green"
              >
                <Instagram size={18} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-graphite transition-colors hover:bg-brand-green"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-graphite pt-6 text-center text-xs text-brand-gray-500">
          © {new Date().getFullYear()} ProtecSeg. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
