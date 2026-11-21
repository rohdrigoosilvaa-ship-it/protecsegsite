import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "../../data/site";

export function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (!siteConfig.whatsappNumber) return;
    const showTimer = setTimeout(() => setShowBubble(true), 4000);
    const hideTimer = setTimeout(() => setShowBubble(false), 12000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!siteConfig.whatsappNumber) return null;

  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble ? (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-[220px] rounded-[var(--radius-card-lg)] border border-[var(--color-gray-light)] bg-white p-4 shadow-[var(--shadow-card-lg)]"
          >
            <button
              type="button"
              onClick={() => setShowBubble(false)}
              aria-label="Fechar"
              className="absolute right-2 top-2 text-[var(--color-gray-mid)] hover:text-[var(--color-ink)]"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="pr-4 text-sm font-semibold text-[var(--color-ink)]">
              Precisa de ajuda com SST?
            </p>
            <p className="mt-1 text-xs text-[var(--color-gray-dark)]">
              Fale com um especialista.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a ProtecSeg pelo WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[var(--color-green)] text-white shadow-[0_8px_24px_rgba(0,167,89,0.4)] transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-green)]"
      >
        <span
          aria-hidden
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--color-green)] opacity-60"
        />
        <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  );
}
