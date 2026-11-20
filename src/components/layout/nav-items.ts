export interface NavItem {
  label: string;
  /** Anchor id on the home page (e.g. "solucoes" for "#solucoes"). */
  hash?: string;
  /** Standalone route (e.g. "/protechub"). */
  to?: string;
}

export const navItems: NavItem[] = [
  { label: "Empresa", hash: "sobre" },
  { label: "Soluções", hash: "solucoes" },
  { label: "ProtecOne", hash: "protecone" },
  { label: "ProtecHub", to: "/protechub" },
  { label: "Planos", hash: "planos" },
  { label: "Diferenciais", hash: "diferenciais" },
  { label: "Contato", hash: "contato" },
];
