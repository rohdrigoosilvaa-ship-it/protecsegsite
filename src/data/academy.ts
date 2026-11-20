export interface AcademyCourse {
  code: string;
  name: string;
  description: string;
  hours: string;
}

// PLACEHOLDER — carga horária a confirmar antes da publicação real dos cursos.
export const academyCourses: AcademyCourse[] = [
  {
    code: "NR-01",
    name: "Integração de Segurança e Saúde no Trabalho",
    description: "Fundamentos de SST e riscos psicossociais para novos colaboradores.",
    hours: "4 horas",
  },
  {
    code: "NR-05",
    name: "CIPA — Comissão Interna de Prevenção de Acidentes e de Assédio",
    description: "Formação de membros da CIPA na prevenção de acidentes e de assédio.",
    hours: "20 horas",
  },
  {
    code: "NR-06",
    name: "Equipamentos de Proteção Individual — EPI",
    description: "Uso correto, conservação e importância dos equipamentos de proteção.",
    hours: "4 horas",
  },
  {
    code: "NR-17",
    name: "Ergonomia no Trabalho",
    description: "Boas práticas ergonômicas para prevenir lesões e desconforto.",
    hours: "8 horas",
  },
  {
    code: "NR-21",
    name: "Trabalho a Céu Aberto",
    description: "Proteção contra exposição solar, calor e intempéries.",
    hours: "6 horas",
  },
  {
    code: "NR-23",
    name: "Proteção Contra Incêndios",
    description: "Prevenção, combate a princípios de incêndio e abandono de área.",
    hours: "8 horas",
  },
  {
    code: "NR-24",
    name: "Condições Sanitárias e de Conforto",
    description: "Requisitos de instalações sanitárias e áreas de vivência.",
    hours: "4 horas",
  },
  {
    code: "NR-25",
    name: "Resíduos Industriais",
    description: "Gestão e destinação correta de resíduos no ambiente de trabalho.",
    hours: "6 horas",
  },
  {
    code: "NR-26",
    name: "Sinalização de Segurança e Comunicação de Perigos",
    description: "Cores, sinalização e comunicação de riscos no ambiente de trabalho.",
    hours: "4 horas",
  },
];
