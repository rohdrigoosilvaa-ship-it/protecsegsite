export type ServiceSlug = "pgr-pcmso-sao-paulo" | "nr-01-riscos-psicossociais" | "gestao-sst-esocial";

export type Plan = { name: string; size: string; price: string; setup: string; items: string[]; highlight?: boolean };

export type ServiceContent = {
  slug: ServiceSlug;
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  whatsappMessage: string;
  signsTitle: string;
  signs: string[];
  includedTitle: string;
  included: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  pricing:
    | { kind: "list"; title: string; note: string; rows: { label: string; price: string }[] }
    | { kind: "plans"; title: string; note: string; plans: Plan[] };
  notice?: string;
  faq: { question: string; answer: string }[];
};

const DIAGNOSIS_STEP = {
  title: "Diagnóstico gratuito",
  description: "Em 30 minutos conferimos documentos, exames, treinamentos e eSocial. Você recebe um relatório de 1 página com as 3 prioridades.",
};

export const SERVICES: Record<ServiceSlug, ServiceContent> = {
  "pgr-pcmso-sao-paulo": {
    slug: "pgr-pcmso-sao-paulo",
    navLabel: "PGR e PCMSO",
    eyebrow: "PGR · PCMSO · LTCAT",
    title: "PGR e PCMSO para pequenas e médias empresas em São Paulo",
    subtitle:
      "Elaboramos e mantemos em dia o PGR, o PCMSO e os laudos da sua empresa, com inventário de riscos, plano de ação e controle de exames em uma plataforma própria.",
    whatsappMessage: "Olá! Vim pela página de PGR e PCMSO do site e quero agendar um diagnóstico.",
    signsTitle: "Hora de revisar o PGR e o PCMSO se:",
    signs: [
      "O PGR tem mais de 2 anos ou não tem plano de ação",
      "A empresa contratou, mudou funções ou trocou de endereço",
      "Ninguém controla quando vencem os exames periódicos",
      "Um cliente ou uma licitação pediu a documentação de SST",
      "Os eventos S-2220 e S-2240 do eSocial estão pendentes",
    ],
    includedTitle: "O que entregamos",
    included: [
      { title: "PGR completo", description: "Inventário de riscos e plano de ação com responsáveis e prazos, conforme a NR-01." },
      { title: "PCMSO", description: "Programa de saúde ocupacional com médico do trabalho responsável, conforme a NR-07." },
      { title: "ASOs e exames", description: "Controle de admissionais, periódicos e demissionais, com aviso antes de vencer." },
      { title: "LTCAT e laudos", description: "Quando há exposição a ruído, calor, químicos ou outros agentes, e laudos de insalubridade/periculosidade." },
      { title: "Informações para o eSocial", description: "Os dados de SST que os eventos S-2220 e S-2240 precisam, prontos para o seu contador." },
      { title: "Tudo no ProtecOne", description: "Documentos, exames e vencimentos em uma plataforma online, acessível pelo celular." },
    ],
    steps: [
      DIAGNOSIS_STEP,
      { title: "Visita e levantamento", description: "Conhecemos as atividades, os ambientes e as funções para identificar os riscos reais." },
      { title: "Documentos prontos", description: "Entregamos PGR, PCMSO e laudos assinados, com o plano de ação explicado." },
      { title: "Acompanhamento", description: "Mantemos exames, revisões e vencimentos em dia, sem você precisar lembrar." },
    ],
    pricing: {
      kind: "list",
      title: "Investimento",
      note: "Valores de referência para serviços avulsos. Nos planos mensais, PGR e PCMSO já estão incluídos.",
      rows: [
        { label: "PGR", price: "a partir de R$ 1.000" },
        { label: "PCMSO", price: "a partir de R$ 900" },
        { label: "LTCAT", price: "a partir de R$ 1.200" },
        { label: "PGR + PCMSO + LTCAT", price: "a partir de R$ 2.500" },
        { label: "Plano mensal com gestão contínua", price: "a partir de R$ 1.000/mês" },
      ],
    },
    faq: [
      {
        question: "Minha empresa precisa de PGR?",
        answer:
          "Em regra, sim: toda empresa com empregados CLT precisa gerenciar os riscos ocupacionais pela NR-01. Microempresas e empresas de pequeno porte de grau de risco 1 ou 2, sem exposição a agentes de risco, podem ter dispensa da elaboração do PGR mediante declaração, mas continuam com outras obrigações. No diagnóstico conferimos o seu caso.",
      },
      {
        question: "De quanto em quanto tempo o PGR precisa ser revisado?",
        answer:
          "A avaliação de riscos deve ser revista pelo menos a cada 2 anos e sempre que houver mudança em processos, ambientes ou funções, ou depois de um acidente.",
      },
      {
        question: "Qual a diferença entre PGR e PCMSO?",
        answer:
          "O PGR identifica os riscos do trabalho e define como controlá-los. O PCMSO usa esse inventário para definir os exames médicos de cada função e acompanhar a saúde dos funcionários.",
      },
      {
        question: "Quanto tempo leva para ficar pronto?",
        answer:
          "Depende do porte e das atividades da empresa. Depois do diagnóstico informamos o prazo exato na proposta.",
      },
      {
        question: "Vocês atendem fora da capital?",
        answer: "Sim. Atendemos São Paulo e a Grande SP, incluindo o ABC, Guarulhos, Osasco e região.",
      },
    ],
  },

  "nr-01-riscos-psicossociais": {
    slug: "nr-01-riscos-psicossociais",
    navLabel: "NR-01 psicossocial",
    eyebrow: "NR-01 · Riscos psicossociais",
    title: "NR-01 e riscos psicossociais: como incluir no PGR da sua empresa",
    subtitle:
      "A NR-01 passou a incluir os fatores de risco psicossociais no gerenciamento de riscos. Mapeamos estresse, sobrecarga e assédio com dados, documentamos no PGR e acompanhamos o plano de ação.",
    whatsappMessage: "Olá! Vim pela página de NR-01 e riscos psicossociais do site e quero agendar um diagnóstico.",
    signsTitle: "Este é o momento de olhar para isso se:",
    signs: [
      "O PGR da empresa ainda não fala de riscos psicossociais",
      "Há afastamentos, faltas ou rotatividade sem explicação clara",
      "Equipes relatam sobrecarga, metas difíceis ou conflitos",
      "O RH quer agir, mas não sabe por onde começar",
      "A empresa precisa mostrar como trata o tema",
    ],
    includedTitle: "Como funciona com o Avalia NR-01",
    included: [
      { title: "Pesquisa confidencial", description: "Questionário por setor com fatores compatíveis com o COPSOQ-III. Ninguém é identificado." },
      { title: "Proteção de dados", description: "Grupos com menos de 3 respostas não são exibidos, para que ninguém seja exposto por dedução." },
      { title: "Avaliação técnica", description: "Os resultados viram itens do inventário de riscos, revisados por especialista em SST." },
      { title: "Plano de ação", description: "Ações ligadas a cada fator, com responsáveis, prazos e acompanhamento semanal." },
      { title: "Documentação auditável", description: "Relatórios e evidências organizados para apresentar quando for preciso." },
      { title: "Apoio ao eSocial", description: "Informações para o evento S-2240, junto com os demais riscos do PGR." },
    ],
    steps: [
      DIAGNOSIS_STEP,
      { title: "Pesquisa nas equipes", description: "Aplicamos a pesquisa confidencial por setor, pelo celular ou computador." },
      { title: "Inventário e plano", description: "Classificamos os fatores, atualizamos o PGR e definimos o plano de ação com a liderança." },
      { title: "Acompanhamento", description: "Medimos a evolução ciclo a ciclo e ajustamos as ações." },
    ],
    pricing: {
      kind: "list",
      title: "Investimento",
      note: "O valor depende do número de funcionários e de setores. Informamos na proposta, depois do diagnóstico.",
      rows: [
        { label: "Planos Gestão SST e Premium", price: "módulo NR-01 incluído" },
        { label: "Planos Essencial e Profissional", price: "módulo sob consulta" },
        { label: "Empresas sem plano mensal", price: "projeto sob consulta" },
      ],
    },
    notice:
      "O tema está em discussão no Supremo Tribunal Federal (ADPF 1316). Acompanhamos o andamento e orientamos nossos clientes a cada atualização.",
    faq: [
      {
        question: "O que são riscos psicossociais?",
        answer:
          "São fatores da organização do trabalho que podem afetar a saúde mental e física: excesso de demanda, falta de autonomia, metas inviáveis, assédio, conflitos e falta de apoio, entre outros.",
      },
      {
        question: "As respostas dos funcionários são anônimas?",
        answer:
          "Sim. Os resultados são sempre agregados por setor, e grupos com menos de 3 respostas não aparecem nos relatórios.",
      },
      {
        question: "Minha empresa é pequena. Isso vale para mim?",
        answer:
          "Os riscos psicossociais fazem parte do gerenciamento de riscos da NR-01, que vale para as empresas obrigadas a ter PGR. No diagnóstico avaliamos o porte e o grau de risco da sua empresa e dizemos o que se aplica.",
      },
      {
        question: "Isso substitui o trabalho de um psicólogo?",
        answer:
          "Não. É gestão de riscos do trabalho: identificar fatores na organização do trabalho e agir sobre eles. Casos individuais devem ser encaminhados a profissionais de saúde.",
      },
      {
        question: "E a discussão no STF?",
        answer:
          "A ADPF 1316 está em andamento no Supremo Tribunal Federal. Acompanhamos cada movimentação e avisamos nossos clientes quando algo mudar.",
      },
    ],
  },

  "gestao-sst-esocial": {
    slug: "gestao-sst-esocial",
    navLabel: "Gestão de SST",
    eyebrow: "Gestão de SST · eSocial",
    title: "Gestão de SST mensal e eSocial para pequenas e médias empresas",
    subtitle:
      "Um plano mensal com preço fechado: documentos, exames, treinamentos, EPIs e informações de SST para o eSocial acompanhados por especialistas e pela plataforma ProtecOne.",
    whatsappMessage: "Olá! Vim pela página de gestão de SST e eSocial do site e quero agendar um diagnóstico.",
    signsTitle: "Um plano mensal faz sentido se:",
    signs: [
      "Ninguém na empresa cuida da SST no dia a dia",
      "Documentos e exames vencem sem aviso",
      "O contador cobra informações de SST para o eSocial",
      "A empresa está crescendo e contratando",
      "Você prefere um valor fixo a contratar cada serviço separado",
    ],
    includedTitle: "O que a gestão mensal inclui",
    included: [
      { title: "Documentos em dia", description: "PGR, PCMSO, LTCAT e laudos elaborados, revisados e guardados no ProtecOne." },
      { title: "Exames e ASOs", description: "Controle de todos os exames com aviso antes do vencimento." },
      { title: "eSocial SST", description: "Informações para os eventos S-2210 (CAT), S-2220 e S-2240, em parceria com o seu contador." },
      { title: "Treinamentos e EPIs", description: "Treinamentos NR, fichas de entrega de EPI e controle de CA, conforme o plano." },
      { title: "CIPA e inspeções", description: "CIPA ou designado (NR-05) e inspeções periódicas, conforme o plano." },
      { title: "Atendimento próximo", description: "Canal direto por WhatsApp com especialista, sem fila de atendimento." },
    ],
    steps: [
      DIAGNOSIS_STEP,
      { title: "Proposta com preço fechado", description: "Plano definido pelo número de funcionários e pelo grau de risco." },
      { title: "Implantação", description: "Colocamos a documentação em dia e cadastramos tudo no ProtecOne." },
      { title: "Gestão contínua", description: "Acompanhamos prazos, mudanças e indicadores todo mês." },
    ],
    pricing: {
      kind: "plans",
      title: "Planos mensais",
      note: "Acima de 150 funcionários, montamos uma proposta sob medida. Valores sem letras miúdas: o que está no plano está no preço.",
      plans: [
        {
          name: "Essencial",
          size: "até 10 funcionários · grau de risco 1-2",
          price: "R$ 1.000/mês",
          setup: "implantação R$ 1.500",
          items: ["PGR, PCMSO e LTCAT", "Gestão básica de SST", "Controle de documentos"],
        },
        {
          name: "Profissional",
          size: "11 a 30 funcionários · grau de risco 1-2",
          price: "R$ 1.800/mês",
          setup: "implantação R$ 2.500",
          items: ["Tudo do Essencial", "Inventário de riscos e plano de ação", "Gestão de EPIs", "Treinamentos"],
          highlight: true,
        },
        {
          name: "Gestão SST",
          size: "31 a 60 funcionários · grau de risco 3-4",
          price: "R$ 2.200/mês",
          setup: "implantação R$ 3.000",
          items: ["Tudo do Profissional", "Módulo NR-01 (psicossocial)", "CIPA", "Inspeções"],
        },
        {
          name: "Premium",
          size: "61 a 150 funcionários · grau de risco 3-4",
          price: "R$ 4.000/mês",
          setup: "implantação R$ 4.000",
          items: ["Tudo do Gestão SST", "Visitas técnicas", "Auditorias", "Investigação de acidentes"],
        },
      ],
    },
    faq: [
      {
        question: "O que é a implantação?",
        answer:
          "É o trabalho inicial de colocar tudo em dia: levantamento, elaboração dos documentos que faltam e cadastro da empresa no ProtecOne. É pago uma vez, no início.",
      },
      {
        question: "Meu contador já cuida do eSocial. Vocês substituem?",
        answer:
          "Não. Trabalhamos junto com o seu contador: fornecemos as informações de SST que ele precisa para os eventos S-2210, S-2220 e S-2240.",
      },
      {
        question: "Como sei qual plano é o meu?",
        answer:
          "Pelo número de funcionários e pelo grau de risco da atividade (definido pelo CNAE). No diagnóstico gratuito confirmamos e indicamos o plano certo.",
      },
      {
        question: "Posso contratar só um serviço avulso?",
        answer:
          "Pode. PGR, PCMSO, laudos, treinamentos e inspeções também são vendidos separadamente. Na proposta mostramos as duas opções.",
      },
    ],
  },
};

export const SERVICE_LIST = Object.values(SERVICES);
