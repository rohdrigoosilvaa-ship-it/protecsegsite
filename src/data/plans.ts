export interface Plan {
  id: string;
  name: string;
  companySize: string;
  riskLevel: string;
  positioning: string;
  price: number;
  setupFee: number;
  featured?: boolean;
  includesFrom?: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    companySize: "Até 10 colaboradores",
    riskLevel: "Grau de risco 1 e 2",
    positioning:
      "Plano ideal para pequenas empresas que precisam manter a documentação e os principais requisitos de SST organizados e em conformidade.",
    price: 1000,
    setupFee: 1500,
    features: [
      "PGR",
      "PCMSO",
      "LTCAT",
      "Gestão básica de SST",
      "Controle de documentos",
      "Orientações técnicas",
      "Acompanhamento das obrigações de SST",
    ],
  },
  {
    id: "profissional",
    name: "Profissional",
    companySize: "De 11 a 30 colaboradores",
    riskLevel: "Grau de risco 1 e 2",
    positioning:
      "Uma solução mais completa para empresas que precisam estruturar e acompanhar a gestão de SST de forma contínua.",
    price: 1800,
    setupFee: 2500,
    featured: true,
    includesFrom: "Essencial",
    features: [
      "GRO",
      "Inventário de Riscos",
      "Plano de Ação",
      "Gestão de EPIs",
      "Treinamentos e capacitações",
      "Acompanhamento das obrigações de SST",
      "Orientação técnica contínua",
      "Gestão e organização dos documentos de SST",
    ],
  },
  {
    id: "gestao-sst",
    name: "Gestão SST",
    companySize: "De 31 a 60 colaboradores",
    riskLevel: "Grau de risco 3 e 4",
    positioning:
      "Gestão completa de SST para empresas que precisam de acompanhamento técnico mais próximo, controle de riscos e gestão contínua.",
    price: 2200,
    setupFee: 3000,
    includesFrom: "Profissional",
    features: [
      "Avaliação e gestão da NR-01",
      "GRO e PGR",
      "Gerenciamento de riscos ocupacionais",
      "Gestão da CIPA",
      "Inspeções de segurança",
      "Plano de ação",
      "Indicadores de SST",
      "Relatórios gerenciais",
      "Acompanhamento de não conformidades",
      "Gestão de documentos",
      "Suporte técnico especializado",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    companySize: "De 61 a 150 colaboradores",
    riskLevel: "Grau de risco 3 e 4",
    positioning:
      "Solução completa e estratégica para empresas que precisam de uma gestão de SST mais robusta, acompanhamento próximo e visão gerencial.",
    price: 4000,
    setupFee: 4000,
    includesFrom: "Gestão SST",
    features: [
      "Gestão completa da NR-01",
      "Gestão da CIPA",
      "Visitas técnicas programadas",
      "Auditorias de SST",
      "Investigação e análise de acidentes",
      "Gestão de requisitos legais",
      "Indicadores e dashboards de SST",
      "Relatórios gerenciais personalizados",
      "Acompanhamento estratégico",
      "Suporte técnico prioritário",
      "Reuniões de acompanhamento com a gestão",
    ],
  },
];

export interface AddonService {
  name: string;
  priceFrom: number;
  unit?: string;
}

export const addonServices: AddonService[] = [
  { name: "PGR", priceFrom: 1000 },
  { name: "PCMSO", priceFrom: 900 },
  { name: "LTCAT", priceFrom: 1200 },
  { name: "PGR + PCMSO", priceFrom: 1600 },
  { name: "PGR + LTCAT", priceFrom: 1900 },
  { name: "PGR + PCMSO + LTCAT", priceFrom: 2500 },
  { name: "Inventário de Riscos", priceFrom: 1000 },
  { name: "AET", priceFrom: 1200 },
  { name: "Laudo de Insalubridade", priceFrom: 1200 },
  { name: "Laudo de Periculosidade", priceFrom: 1200 },
  { name: "APR", priceFrom: 250 },
  { name: "Ordem de Serviço", priceFrom: 200 },
  { name: "Procedimento de SST", priceFrom: 350 },
  { name: "Treinamentos NR", priceFrom: 500 },
  { name: "PPP", priceFrom: 180, unit: "/unidade" },
  { name: "Inspeção de Segurança", priceFrom: 600 },
  { name: "Investigação de Acidente", priceFrom: 900 },
  { name: "Visita Técnica", priceFrom: 600 },
];
