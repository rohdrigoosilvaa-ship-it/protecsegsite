import { useEffect } from "react";
import { AcademyHero } from "../components/academy/AcademyHero";
import { AcademyCatalog } from "../components/academy/AcademyCatalog";
import { AcademyFinalCta } from "../components/academy/AcademyFinalCta";

const TITLE = "ProtecHub | Treinamentos EAD em SST";
const DESCRIPTION =
  "ProtecHub — treinamentos EAD em Segurança e Saúde no Trabalho, com cursos relacionados às principais NRs.";

export function AcademyPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";
    meta?.setAttribute("content", DESCRIPTION);

    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <>
      <AcademyHero />
      <AcademyCatalog />
      <AcademyFinalCta />
    </>
  );
}
