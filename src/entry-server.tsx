import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { PAGE_DESCRIPTION, PAGE_TITLE, structuredData } from "./pages/metodo/content";

export const pages: {
  path: string;
  title?: string;
  description?: string;
  jsonLd?: (origin: string) => unknown;
  /** Só a casca do HTML (sem conteúdo pré-renderizado), para rotas carregadas sob demanda. */
  shell?: boolean;
}[] = [
  { path: "/", title: PAGE_TITLE, description: PAGE_DESCRIPTION, jsonLd: structuredData },
  {
    path: "/protechub",
    shell: true,
    title: "ProtecHub | Treinamentos EAD em SST",
    description: "ProtecHub — treinamentos EAD em Segurança e Saúde no Trabalho, com cursos relacionados às principais NRs.",
  },
];

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
