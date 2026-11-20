import {
  BrainCircuit,
  Briefcase,
  DatabaseZap,
  Factory,
  HardHat,
  LayoutDashboard,
  Route,
  ShoppingBag,
  Truck,
  Warehouse,
  Workflow,
} from "lucide-react";

export interface DigitalSolution {
  number: string;
  title: string;
  description: string;
  icon: typeof LayoutDashboard;
  tags?: string[];
}

export const digitalSolutions: DigitalSolution[] = [
  {
    number: "01",
    title: "Dashboards",
    description:
      "Indicadores de acidentes, treinamentos, auditorias e conformidade, sempre atualizados.",
    icon: LayoutDashboard,
    tags: ["Power BI", "APIs"],
  },
  {
    number: "02",
    title: "Automação",
    description:
      "Consolidação de bases, geração de relatórios e alertas de prazo sem trabalho manual.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Inteligência Artificial",
    description:
      "Apoio à análise de documentos e à tomada de decisão — nunca substitui o profissional de SST.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Governança de Dados",
    description: "Padronização e qualidade dos dados que alimentam seus indicadores.",
    icon: DatabaseZap,
  },
];

export const dataJourney = ["Dados", "Indicadores", "Análise", "Decisão", "Ação"];

export interface Segment {
  name: string;
  icon: typeof LayoutDashboard;
  description: string;
}

export const segments: Segment[] = [
  {
    name: "Indústria",
    icon: Factory,
    description: "Gestão de SST para operações fabris, máquinas e produção contínua.",
  },
  {
    name: "Logística",
    icon: Warehouse,
    description: "Riscos de armazenagem, movimentação de cargas e operação de centros de distribuição.",
  },
  {
    name: "Transportes",
    icon: Route,
    description: "SST para motoristas, manutenção de frota e bases operacionais.",
  },
  {
    name: "Agronegócio",
    icon: Truck,
    description: "Segurança do trabalho para operações rurais e no campo.",
  },
  {
    name: "Construção Civil",
    icon: HardHat,
    description: "Gestão de riscos em canteiro de obras e trabalho em altura.",
  },
  {
    name: "Armazéns",
    icon: Warehouse,
    description: "Controle de riscos em estocagem, empilhadeiras e movimentação interna.",
  },
  {
    name: "Comércio",
    icon: ShoppingBag,
    description: "Documentação e gestão de SST para lojas e equipes de atendimento.",
  },
  {
    name: "Serviços",
    icon: Briefcase,
    description: "SST adaptada à rotina de empresas prestadoras de serviço.",
  },
];
