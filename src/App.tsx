import { motion, useScroll, useSpring } from "framer-motion";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Solution } from "./sections/Solution";
import { TraditionalVsDigital } from "./sections/TraditionalVsDigital";
import { ProtecsegDigital } from "./sections/ProtecsegDigital";
import { Method } from "./sections/Method";
import { Culture } from "./sections/Culture";
import { Innovation } from "./sections/Innovation";
import { Segments } from "./sections/Segments";
import { Differentials } from "./sections/Differentials";
import { About } from "./sections/About";
import { Leadership } from "./sections/Leadership";
import { NotJustDocuments } from "./sections/NotJustDocuments";
import { SocialProof } from "./sections/SocialProof";
import { Blog } from "./sections/Blog";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-brand-green"
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <TraditionalVsDigital />
        <ProtecsegDigital />
        <Method />
        <Culture />
        <Innovation />
        <Segments />
        <Differentials />
        <About />
        <Leadership />
        <NotJustDocuments />
        <SocialProof />
        <Blog />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
