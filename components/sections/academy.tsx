import { useTranslations } from "next-intl";
import { BookOpen, TrendUp, Robot, ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";

const icons = [BookOpen, TrendUp, Robot, ChartLineUp] as const;

export function Academy() {
  const t = useTranslations("academy");
  const programs = t.raw("programs") as Array<{
    id: string; name: string; desc: string; badge: string;
  }>;

  return (
    <section id="academy" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-14"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((prog, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={prog.id} delay={i * 0.08}>
                <GlassCard variant="subtle" className="flex flex-col p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                    <Icon size={24} weight="duotone" className="text-ink" />
                  </span>
                  <div className="mt-4 flex-1">
                    <h3 className="font-display text-lg font-bold text-ink">{prog.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{prog.desc}</p>
                  </div>
                  <div className="mt-5 inline-flex items-center rounded-full bg-cyan/10 px-3 py-1 font-mono text-xs font-semibold text-cyan">
                    {prog.badge}
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
