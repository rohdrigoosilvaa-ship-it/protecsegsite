import { useRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHoverScale } from "../../animations/cardAnimations";

type Variant = "primary" | "secondary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-green)] text-white hover:bg-[var(--color-green-hover)] focus-visible:outline-[var(--color-green)]",
  secondary:
    "bg-white text-[var(--color-ink)] border border-[var(--color-gray-light)] hover:bg-[var(--color-gray-subtle)] focus-visible:outline-[var(--color-ink)]",
  outline:
    "border border-white/30 text-white hover:border-[var(--color-green)] hover:text-[var(--color-green)] focus-visible:outline-white",
};

const baseClasses =
  "inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-btn)] px-5 font-heading text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  useHoverScale(ref);

  return (
    <button ref={ref} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function ButtonLink({ variant = "primary", className, children, ...props }: ButtonLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  useHoverScale(ref);

  return (
    <a ref={ref} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </a>
  );
}
