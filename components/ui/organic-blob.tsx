import { cn } from "@/lib/utils";

/**
 * Ambient gradient blob — positioned absolutely inside a relative container.
 * Animates via CSS (blob-breathe keyframes in globals.css) so it works in
 * server components and respects prefers-reduced-motion via CSS.
 */
export function OrganicBlob({
  className,
  variant = "primary",
  slow = false,
}: {
  className?: string;
  variant?: "primary" | "secondary" | "soft";
  slow?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full",
        slow ? "blob-breathe-slow" : "blob-breathe",
        variant === "primary" && "bg-[radial-gradient(circle,rgba(51,204,255,0.22),transparent_65%)] blur-[90px]",
        variant === "secondary" && "bg-[radial-gradient(circle,rgba(165,233,255,0.18),transparent_65%)] blur-[100px]",
        variant === "soft" && "bg-[radial-gradient(circle,rgba(51,204,255,0.10),transparent_65%)] blur-[80px]",
        className,
      )}
    />
  );
}
