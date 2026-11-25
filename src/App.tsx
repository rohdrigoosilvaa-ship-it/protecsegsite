import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { MetodoPage } from "./pages/metodo/MetodoPage";
import { preloadContactForm } from "./components/sections/LazyContactForm";

const AcademyPage = lazy(() => import("./pages/AcademyPage").then((m) => ({ default: m.AcademyPage })));

const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

function App() {
  const location = useLocation();

  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    if (normalizePath(window.location.pathname) !== "/") idle(() => preloadContactForm());
    // Child layout effects of the hydration pass have run by now.
    delete document.documentElement.dataset.psPrerendered;
  }, []);

  // A página inicial é o Método ProtecSeg, com menu, rodapé e WhatsApp próprios.
  const path = normalizePath(location.pathname);
  if (path === "/") return <MetodoPage />;
  if (path === "/metodo-protecseg") return <Navigate to="/" replace />;

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
