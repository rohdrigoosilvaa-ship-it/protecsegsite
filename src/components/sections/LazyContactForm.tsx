import { lazy, Suspense, useEffect, useState } from "react";

const load = () => import("./ContactForm").then((m) => ({ default: m.ContactForm }));
const ContactFormImpl = lazy(load);

/** Warms the form chunk (zod + react-hook-form) once the page is idle, so it is ready before the visitor scrolls to it. */
export function preloadContactForm() {
  void load();
}

const placeholder = <div aria-hidden="true" className="min-h-[880px] sm:min-h-[504px] lg:min-h-[546px]" />;

export function LazyContactForm() {
  // The prerendered HTML and the hydration pass both render the placeholder;
  // suspending on the lazy chunk during hydration would make React discard the
  // server HTML for this boundary (minified error #419).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return placeholder;
  return (
    <Suspense fallback={placeholder}>
      <ContactFormImpl />
    </Suspense>
  );
}
