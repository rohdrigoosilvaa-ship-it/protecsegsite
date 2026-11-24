import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { PROTEC360_DESCRIPTION, PROTEC360_TITLE } from "./pages/Protec360Page";

export const pages = [
  { path: "/" },
  { path: "/protec360", title: PROTEC360_TITLE, description: PROTEC360_DESCRIPTION },
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
