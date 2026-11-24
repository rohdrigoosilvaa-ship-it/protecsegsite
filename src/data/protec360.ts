import {
  BarChart3,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  HardHat,
  LayoutDashboard,
  type LucideIcon,
  Radar,
  Send,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

// Página do Método Protec360. Todo o conteúdo vem do que a ProtecSeg já
// publica no site (etapas, planos e serviços). Regra: nada de números,
// clientes, prazos ou depoimentos inventados.

/** Caminho da imagem do personagem (ex.: "/assets/images/personagem-protec360.webp"). Vazio = ilustração da marca. */
export const characterImage = "";

export const protec360Hero = {
  eyebrow: "Método Protec360",
  titleStart: "Sua empresa em dia com a SST,",
  titleHighlight: "do diagnóstico à rotina.",
  description:
    "O Protec360 é o jeito ProtecSeg de cuidar da Segurança do Trabalho: um ciclo contínuo de quatro etapas que tira a sua empresa do improviso e mantém tudo em conformidade, todos os meses.",
};

export const protec360Highlights = [
  {
    icon: ClipboardCheck,
    title: "Documentação em dia",
    description: "PGR, PCMSO, LTCAT, laudos e toda a documentação obrigatória organizada.",
  },
  {
    icon: LayoutDashboard,
    title: "Gestão contínua",
    description: "Treinamentos, EPIs, ASOs, indicadores e ações sob controle, mês a mês.",
  },
  {
    icon: ShieldCheck,
    title: "Pronta para a fiscalização",
    description: "Documentação organizada e rastreável, pronta para responder a qualquer momento.",
  },
];

export interface ComplianceItem {
  label: string;
  before: { status: "critical" | "attention"; text: string };
  after: string;
}

/** Cenário ilustrativo (não é dado de cliente) usado no comparativo interativo. */
export const complianceScenario: ComplianceItem[] = [
  {
    label: "PGR",
    before: { status: "critical", text: "Desatualizado desde a última mudança no quadro" },
    after: "Atualizado e com plano de ação acompanhado",
  },
  {
    label: "ASOs",
    before: { status: "attention", text: "Exames periódicos sem controle de vencimento" },
    after: "Vencimentos controlados pelo PCMSO",
  },
  {
    label: "Treinamentos NR",
    before: { status: "attention", text: "Certificados espalhados e sem reciclagem prevista" },
    after: "Capacitações em dia e reciclagens programadas",
  },
  {
    label: "eSocial (S-2240)",
    before: { status: "critical", text: "Eventos de SST enviados sem conferência" },
    after: "Eventos conferidos antes do envio",
  },
];

export const protec360Steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Levantamos os riscos e o nível de conformidade da sua empresa.",
    detail: "Você descobre exatamente o que está pendente e o que é prioridade.",
  },
  {
    number: "02",
    title: "Regularização",
    description: "Colocamos a documentação obrigatória em dia (PGR, PCMSO, LTCAT e mais).",
    detail: "A base legal da sua empresa fica completa e organizada.",
  },
  {
    number: "03",
    title: "Gestão",
    description: "Assumimos a rotina de SST com o plano certo para o tamanho da sua empresa.",
    detail: "Treinamentos, EPIs, ASOs e documentos deixam de depender de lembrete.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Indicadores, prazos e ações monitorados de forma contínua, com apoio do ProtecOne.",
    detail: "O ciclo recomeça: cada mudança na empresa volta para o diagnóstico.",
  },
];

export interface IncludedItem {
  number: string;
  title: string;
  example: string;
  icon: LucideIcon;
  featured?: boolean;
  wide?: boolean;
}

export const protec360Included: IncludedItem[] = [
  { number: "01", title: "PGR e GRO", example: "Inventário de riscos e plano de ação", icon: FileCheck2, featured: true, wide: true },
  { number: "02", title: "PCMSO", example: "Exames ocupacionais e ASOs", icon: Stethoscope },
  { number: "03", title: "LTCAT", example: "Laudo das condições ambientais", icon: ClipboardCheck },
  { number: "04", title: "NR-01 psicossocial", example: "Estresse, sobrecarga e burnout mapeados", icon: Radar },
  { number: "05", title: "Treinamentos", example: "Capacitações e reciclagens das NRs", icon: GraduationCap },
  { number: "06", title: "Gestão de EPIs", example: "Entrega, controle e registro", icon: HardHat, wide: true },
  { number: "07", title: "Gestão da CIPA", example: "Rotina e documentação da comissão", icon: Users },
  { number: "08", title: "eSocial", example: "Eventos de SST conferidos antes do envio", icon: Send },
  { number: "09", title: "Indicadores", example: "Relatórios gerenciais de SST", icon: BarChart3 },
  { number: "10", title: "ProtecOne", example: "Gestão centralizada em uma plataforma", icon: LayoutDashboard },
];

export const protec360Trust = [
  {
    title: "Escopo transparente",
    description: "Planos definidos por porte e necessidade, com o preço publicado. Sem surpresas.",
  },
  {
    title: "Atendimento técnico",
    description: "Profissionais especializados acompanhando a rotina da sua empresa.",
  },
  {
    title: "Tecnologia própria",
    description: "Gestão centralizada por meio do ProtecOne.",
  },
  {
    title: "Histórico auditável",
    description: "Documentação organizada e rastreável, pronta para a fiscalização.",
  },
];
