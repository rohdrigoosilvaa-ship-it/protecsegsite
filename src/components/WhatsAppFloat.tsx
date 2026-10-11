import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "../lib/content";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg animate-pulse-ring"
    >
      <MessageCircle size={28} fill="white" />
    </motion.a>
  );
}
