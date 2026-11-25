export interface NavItem {
  label: string;
  /** Anchor id on the home page (e.g. "solucoes" for "#solucoes"). */
  hash?: string;
  /** Standalone route (e.g. "/protechub"). */
  to?: string;
}

export const navItems: NavItem[] = [
  { label: "O método", hash: "metodo" },
  { label: "Como funciona", hash: "como-funciona" },
  { label: "O que você recebe", hash: "entregas" },
  { label: "ProtecHub", to: "/protechub" },
  { label: "Planos", hash: "planos" },
  { label: "Dúvidas", hash: "duvidas" },
  { label: "Contato", hash: "contato" },
];
