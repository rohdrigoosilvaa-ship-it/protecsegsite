import { useEffect } from "react";
import { Protec360Hero } from "../components/protec360/Protec360Hero";
import { Protec360Problem } from "../components/protec360/Protec360Problem";
import {
  Protec360Highlights,
  Protec360Included,
  Protec360Statement,
  Protec360Steps,
  Protec360Trust,
} from "../components/protec360/Protec360Sections";
import { Plans } from "../components/sections/Plans";
import { FinalCta } from "../components/sections/FinalCta";

export const PROTEC360_TITLE = "Método Protec360 | ProtecSeg Consultoria em SST";
export const PROTEC360_DESCRIPTION =
  "Método Protec360: diagnóstico, regularização, gestão e acompanhamento contínuo da Segurança do Trabalho da sua empresa, com planos mensais por porte.";

export function Protec360Page() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PROTEC360_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";
    meta?.setAttribute("content", PROTEC360_DESCRIPTION);
    if (!window.location.hash) window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <>
      <Protec360Hero />
      <Protec360Highlights />
      <Protec360Problem />
      <Protec360Statement />
      <Protec360Steps />
      <Protec360Included />
      <Plans />
      <Protec360Trust />
      <FinalCta />
    </>
  );
}
