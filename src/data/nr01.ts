import { History, Radar, Send } from "lucide-react";

export const nr01Features = [
  {
    icon: Radar,
    title: "Mapeamento de riscos",
    description:
      "Aplicamos pesquisas para identificar estresse, sobrecarga e burnout antes que virem afastamento.",
  },
  {
    icon: History,
    title: "Histórico auditável",
    description:
      "Documentação organizada e rastreável, pronta para responder a uma fiscalização a qualquer momento.",
  },
  {
    icon: Send,
    title: "Apoio ao eSocial",
    description:
      "Organizamos e conferimos os eventos de SST (S-2240) antes do envio, reduzindo o risco de erro ou omissão.",
  },
];

export const nr01Stats = [
  {
    target: 134,
    suffix: "%",
    label: "de aumento nos afastamentos por saúde mental no Brasil (2022–2024)",
  },
  {
    target: 472,
    suffix: " mil",
    label: "pedidos de afastamento por saúde mental registrados em 2024",
  },
  {
    target: 44396,
    prefix: "R$ ",
    suffix: ",84",
    label: "teto da multa por infração no envio do S-2240 ao eSocial",
  },
];

export const nr01Faq = [
  {
    question: "A NR-01 é obrigatória?",
    answer:
      "Sim. A exigência de gerenciar riscos psicossociais dentro do PGR vale para toda empresa com empregados CLT, sem exceção por porte ou setor.",
  },
  {
    question: "Até quando eu tinha para me adequar?",
    answer:
      "O período educativo terminou em 26 de maio de 2026 — desde então a fiscalização já é de caráter punitivo.",
  },
  {
    question: "Isso substitui os exames ocupacionais?",
    answer:
      "Não. O mapeamento de riscos psicossociais é complementar ao PCMSO — um não substitui o outro.",
  },
  {
    question: "Vocês enviam os eventos direto ao eSocial?",
    answer:
      "Organizamos e conferimos os eventos de SST (S-2240) antes do envio, para reduzir erro e omissão na sua rotina de eSocial.",
  },
  {
    question: "Quais os riscos de não se adequar?",
    answer:
      "Multa por infração no eSocial (até R$ 44.396,84), maior exposição em fiscalizações e passivos trabalhistas por afastamentos não gerenciados.",
  },
];
