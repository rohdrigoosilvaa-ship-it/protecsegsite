import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { Root } from "./Root";

export function render(page?: string) {
  return renderToString(
    <StrictMode>
      <Root page={page} />
    </StrictMode>
  );
}
