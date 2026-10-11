import { MessageCircle } from "lucide-react";
import { CONTACT } from "../lib/content";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-enter fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-soft" />
      <MessageCircle size={28} fill="white" className="relative" />
    </a>
  );
}
