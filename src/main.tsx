import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter/wght.css";
import "./index.css";
import { Root } from "./Root.tsx";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <Root page={container.dataset.page} />
  </StrictMode>
);

if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
