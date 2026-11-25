// Conteúdo da página "Método ProtecSeg" (protótipo site-estrutura/index.html).

export const WHATSAPP_URL = `https://wa.me/5511992730356?text=${encodeURIComponent(
  "Olá! Vim pelo site e quero um diagnóstico de SST da minha empresa.",
)}`;

export const PAGE_PATH = "/metodo-protecseg";
export const PAGE_TITLE = "Consultoria em Segurança do Trabalho em São Paulo | PGR, PCMSO e NR-01 · ProtecSeg";
export const PAGE_DESCRIPTION =
  "PGR, PCMSO, NR-01, treinamentos e eSocial em dia com o Método ProtecSeg: equipe técnica em São Paulo e plataforma que avisa antes de vencer. Planos mensais.";

export const ROTATING_WORDS = ["SST", "PGR", "NR-01", "eSocial", "CIPA"];

export const MARQUEE_ITEMS: [string, string][] = [
  ["NR-01", "Gerenciamento de riscos"],
  ["NR-05", "CIPA"],
  ["NR-06", "EPI"],
  ["NR-07", "PCMSO"],
  ["NR-10", "Eletricidade"],
  ["NR-12", "Máquinas"],
  ["NR-17", "Ergonomia"],
  ["NR-35", "Trabalho em altura"],
  ["eSocial", "S-2210 · S-2220 · S-2240"],
  ["LTCAT", "e laudos"],
];

export const TASKS_BEFORE: [string, string, string][] = [
  ["PGR", "última revisão em 2023", "Vencido"],
  ["ASO periódico", "4 colaboradores atrasados", "Atrasado"],
  ["eSocial S-2240", "condições ambientais do trabalho", "Não enviado"],
  ["Riscos psicossociais (NR-01)", "fora do inventário de riscos", "Não avaliado"],
  ["Treinamento NR-35", "3 colaboradores em altura", "Sem registro"],
];

export const TASKS_AFTER: [string, string, string][] = [
  ["PGR", "revisado e assinado · próxima revisão no painel", "Em dia"],
  ["ASO periódico", "aviso 30 dias antes de vencer", "Em dia"],
  ["eSocial S-2240", "enviado e conferido", "Enviado"],
  ["Riscos psicossociais (NR-01)", "avaliados, com plano de ação", "No PGR"],
  ["Treinamento NR-35", "certificados no sistema", "Válido"],
];

export const DELIVERIES: { n: string; title: string; text: string; cls?: string }[] = [
  { n: "01", title: "PGR e gerenciamento de riscos", text: "Inventário de riscos e plano de ação · NR-01", cls: "big" },
  { n: "02", title: "PCMSO", text: "Exames admissional, periódico, retorno e demissional · NR-07" },
  { n: "03", title: "LTCAT", text: "Base para aposentadoria especial e eSocial" },
  { n: "04", title: "Riscos psicossociais", text: "Estresse, sobrecarga e assédio no PGR · NR-01" },
  { n: "05", title: "Treinamentos NR", text: "NR-05, NR-06, NR-35 e outros, com certificado" },
  { n: "06", title: "eSocial SST", text: "Eventos S-2210, S-2220 e S-2240 enviados e conferidos", cls: "w2" },
  { n: "07", title: "Gestão de EPIs", text: "Ficha, CA e entrega registrada · NR-06" },
  { n: "08", title: "CIPA", text: "Eleição, posse e reuniões · NR-05" },
  { n: "09", title: "Laudos e AET", text: "Insalubridade, periculosidade e ergonomia · NR-15, 16 e 17" },
  { n: "10", title: "Investigação de acidentes", text: "Análise, causa e plano para não repetir" },
];

export const PLANS: { name: string; size: string; price: string; hot?: boolean }[] = [
  { name: "Essencial", size: "até 10 colaboradores", price: "R$ 1.000" },
  { name: "Profissional", size: "11 a 30 colaboradores", price: "R$ 1.800", hot: true },
  { name: "Gestão SST", size: "31 a 60 colaboradores", price: "R$ 2.200" },
  { name: "Premium", size: "61 a 150 colaboradores", price: "R$ 4.000" },
];

export const PLAN_CHECKS = [
  "PGR, PCMSO e LTCAT",
  "Plataforma ProtecOne",
  "Gestão de exames e documentos",
  "Aviso antes de vencer",
  "Treinamentos e EPIs (a partir do Profissional)",
  "Suporte técnico no WhatsApp",
];

export interface FaqItem {
  q: string;
  a: string;
  /** Trecho que depende de confirmação do Rodrigo: NÃO é publicado enquanto existir. */
  pendingNote?: string;
  /** Pergunta inteira aguardando confirmação: fica fora da página e do schema. */
  pending?: boolean;
}

export const FAQ: FaqItem[] = [
  {
    q: "Minha empresa é pequena. Preciso mesmo de PGR e PCMSO?",
    a: "Toda empresa com empregado CLT precisa gerenciar os riscos e cuidar da saúde ocupacional. O que muda pelo porte e pelo grau de risco é o nível de detalhe. No diagnóstico a gente te diz exatamente o que se aplica.",
  },
  {
    q: "Já tenho os documentos feitos por outra empresa. Dá para aproveitar?",
    a: "Sim. No diagnóstico a gente revisa o que você já tem e aproveita o que estiver válido. Só refaz o que estiver vencido, incompleto ou diferente da realidade da empresa.",
  },
  {
    q: "Vocês atendem fora de São Paulo?",
    a: "",
    pending: true,
    pendingNote:
      "[Confirmar com o Rodrigo: regiões atendidas presencialmente e o que pode ser feito a distância pela ProtecOne.]",
  },
  {
    q: "Quanto tempo leva para regularizar?",
    a: "Depende do tamanho da empresa e do que já existe. O diagnóstico já sai com a ordem de prioridade e o prazo de cada entrega.",
  },
  {
    q: "Os riscos psicossociais da NR-01 já estão incluídos?",
    a: "Os fatores psicossociais entram no gerenciamento de riscos do PGR, como pede a NR-01, com plano de ação.",
    pendingNote: "[Confirmar o que entra no plano e o que é módulo à parte.]",
  },
  {
    q: "Como funciona o eSocial de SST?",
    a: "A gente prepara e confere os eventos de SST: S-2210 (acidente), S-2220 (exames) e S-2240 (condições do ambiente de trabalho), com base no PGR, PCMSO e LTCAT.",
  },
];

export const PUBLISHED_FAQ = FAQ.filter((item) => !item.pending);

/**
 * Seção "Quem criou a ProtecSeg?": fica fora da página até o Rodrigo confirmar
 * cargo, formação, trajetória, credenciais, números e enviar a foto real.
 */
export const FOUNDER_CONFIRMED = false;

export const CONTACT = {
  phoneDisplay: "(11) 99273-0356",
  phoneE164: "+55-11-99273-0356",
  email: "protecseg21@gmail.com",
  instagramHandle: "@protecsegconsultoria",
  instagramUrl: "https://www.instagram.com/protecsegconsultoria",
  linkedinUrl: "https://www.linkedin.com/company/protecseg",
};

export function structuredData(siteOrigin: string) {
  const pageUrl = `${siteOrigin}${PAGE_PATH}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteOrigin}/#empresa`,
      name: "ProtecSeg Consultoria em Segurança do Trabalho",
      description: PAGE_DESCRIPTION,
      url: pageUrl,
      logo: `${siteOrigin}/assets/metodo/logo-color.webp`,
      image: `${siteOrigin}/assets/metodo/logo-color.webp`,
      telephone: CONTACT.phoneE164,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      sameAs: [CONTACT.instagramUrl, CONTACT.linkedinUrl],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PUBLISHED_FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];
}
