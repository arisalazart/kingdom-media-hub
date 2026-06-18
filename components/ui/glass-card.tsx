import { cn } from "@/lib/utils";

type Variant = "default" | "subtle" | "dark" | "cyan";

/**
 * Light glassmorphism surface — Apple Vision Pro / Arc Browser style.
 * variant="dark" is used inside dark sections (Case Studies, Footer).
 * variant="cyan" adds a cyan-tinted border for featured cards.
 */
export function GlassCard({
  children,
  className,
  variant = "default",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  as?: "div" | "article" | "li" | "section";
}) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-300",
        variant === "default" && [
          "glass",
          "hover:shadow-[0_24px_64px_rgba(0,0,0,0.10)] hover:-translate-y-0.5",
        ],
        variant === "subtle" && [
          "glass-subtle",
          "hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5",
        ],
        variant === "dark" && "glass-dark",
        variant === "cyan" && [
          "glass",
          "border border-cyan/25 shadow-[0_0_0_1px_rgba(51,204,255,0.15),0_20px_60px_rgba(0,0,0,0.07)]",
          "hover:border-cyan/40 hover:-translate-y-0.5",
        ],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
