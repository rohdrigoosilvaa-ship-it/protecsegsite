import { useRef } from "react";
import { useScrollProgress } from "../../animations/scrollProgress";

export function ScrollProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollProgress(ref);

  return <div ref={ref} className="fixed left-0 right-0 top-0 z-[60] h-1 bg-[var(--color-green)]" />;
}
