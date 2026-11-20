// PLACEHOLDER — substituir pelos dados reais da ProtecSeg antes de publicar.
// Regra do briefing: nenhum número, cliente ou resultado deve ser inventado.

export const siteConfig = {
  name: "ProtecSeg",
  tagline: "Segurança do Trabalho",
  concept: "Da conformidade à inteligência.",
  description:
    "Consultoria estratégica em Segurança e Saúde no Trabalho. Gestão de riscos, PGR, auditorias, treinamentos, indicadores, tecnologia e soluções digitais.",

  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? "",
  whatsappMessage: "Olá! Gostaria de falar com um especialista da ProtecSeg.",

  email: "protecseg21@gmail.com",
  phoneDisplay: "(11) 99273-0356",
  city: "São Paulo - SP",

  social: {
    instagram: "https://www.instagram.com/protecsegconsultoria",
    linkedin: "https://www.linkedin.com/company/protecseg",
  },

  logo: {
    // logo-color: para fundos claros. logo-reverse: para fundos escuros (verde institucional/preto).
    light: "/assets/logo/logo-color.png",
    dark: "/assets/logo/logo-reverse.png",
  },
} as const;
