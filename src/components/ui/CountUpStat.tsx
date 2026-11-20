import { useCounter } from "../../animations/numberAnimations";

export function CountUpStat({
  target,
  prefix = "",
  suffix = "",
  className,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, display } = useCounter<HTMLSpanElement>(target);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
