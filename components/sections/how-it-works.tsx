import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Array<{ number: string; name: string; desc: string }>;

  return (
    <section id="how-it-works" className="bg-section-alt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          align="center"
          className="mb-16"
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-8 flex items-center justify-between">
            <div className="absolute inset-x-0 top-5 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center" style={{ width: `${100 / steps.length}%` }}>
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan/30 bg-white font-mono text-sm font-bold text-cyan shadow-sm">
                  {step.number}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08} className="flex-1 px-4 text-center">
                <h3 className="font-display text-lg font-bold text-ink">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="space-y-8 lg:hidden">
          {steps.map((step, i) => (
            <Reveal key={step.number} as="li" delay={i * 0.06}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-cyan/30 bg-white font-mono text-sm font-bold text-cyan shadow-sm">
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-gradient-to-b from-cyan/30 to-transparent" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-lg font-bold text-ink">{step.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
