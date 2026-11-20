import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { HomePage } from "./pages/HomePage";
import { preloadContactForm } from "./components/sections/LazyContactForm";

const AcademyPage = lazy(() => import("./pages/AcademyPage").then((m) => ({ default: m.AcademyPage })));

function App() {
  const location = useLocation();

  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    idle(() => preloadContactForm());
    // Child layout effects of the hydration pass have run by now.
    delete document.documentElement.dataset.psPrerendered;
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <Header />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/protechub"
                element={
                  <Suspense fallback={null}>
                    <AcademyPage />
                  </Suspense>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
