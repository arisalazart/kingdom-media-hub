import { cn } from "@/lib/utils";

/**
 * Small glass card for the Hero section floating metrics.
 * Each card has an independent float animation class (float-a…e).
 * status: "active" shows a green pulse dot, "metric" shows a cyan number.
 */
export function FloatingCard({
  label,
  value,
  status,
  floatClass,
  className,
}: {
  label: string;
  value: string;
  status?: "active" | "running";
  floatClass: "float-a" | "float-b" | "float-c" | "float-d" | "float-e";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass pointer-events-none select-none rounded-2xl px-4 py-3",
        "shadow-[0_8px_32px_rgba(0,0,0,0.10)]",
        floatClass,
        className,
      )}
      aria-hidden
    >
      <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">{label}</p>
      <div className="mt-1 flex items-center gap-2">
        {status && (
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        )}
        <p className={cn(
          "font-display text-base font-bold leading-none tracking-tight",
          value.startsWith("+") || /^\d/.test(value) ? "text-cyan" : "text-ink",
        )}>
          {value}
        </p>
      </div>
    </div>
  );
}
