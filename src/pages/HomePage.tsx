import { Hero } from "../components/sections/Hero";
import { Nr01Module } from "../components/sections/Nr01Module";
import { Solutions } from "../components/sections/Solutions";
import { Plans } from "../components/sections/Plans";
import { AddonServices } from "../components/sections/AddonServices";
import { ProtecOneSection } from "../components/sections/ProtecOneSection";
import { Differentials } from "../components/sections/Differentials";
import { Segments } from "../components/sections/Segments";
import { About } from "../components/sections/About";
import { HowItWorks } from "../components/sections/HowItWorks";
import { FinalCta } from "../components/sections/FinalCta";

export function HomePage() {
  return (
    <>
      <Hero />
      <Nr01Module />
      <Solutions />
      <Plans />
      <AddonServices />
      <ProtecOneSection />
      <Differentials />
      <Segments />
      <About />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
