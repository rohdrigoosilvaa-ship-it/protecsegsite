import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { PAGE_DESCRIPTION, PAGE_PATH, PAGE_TITLE, structuredData } from "./pages/metodo/content";

export const pages: { path: string; title?: string; description?: string; jsonLd?: (origin: string) => unknown }[] = [
  { path: "/" },
  { path: PAGE_PATH, title: PAGE_TITLE, description: PAGE_DESCRIPTION, jsonLd: structuredData },
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
