import { useTranslations } from "next-intl";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { OrganicBlob } from "@/components/ui/organic-blob";
import { calendlyLink } from "@/lib/env";
import { cn } from "@/lib/utils";

export function Pricing() {
  const t = useTranslations("pricing");
  const plans = t.raw("plans") as Array<{
    name: string; price: string; priceSuffix: string;
    desc: string; features: string[]; cta: string; popular: boolean;
  }>;
  const popularBadge = t("popularBadge");

  return (
    <section id="pricing" className="relative overflow-hidden bg-section-cta py-24 sm:py-32">
      <OrganicBlob variant="soft" className="left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-14"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <GlassCard
                variant={plan.popular ? "cyan" : "subtle"}
                className={cn(
                  "flex flex-col p-7",
                  plan.popular && "ring-1 ring-cyan/20 shadow-[0_0_0_1px_rgba(51,204,255,0.15),0_20px_60px_rgba(51,204,255,0.08)]",
                )}
              >
                {plan.popular && (
                  <span className="mb-4 inline-flex self-start rounded-full bg-cyan/10 px-3 py-1 font-mono text-xs font-semibold text-cyan">
                    {popularBadge}
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">{plan.desc}</p>

                <div className="mt-5 mb-6">
                  <span className="font-display text-4xl font-extrabold tracking-tight text-ink">
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span className="ml-1 text-lg font-medium text-muted">{plan.priceSuffix}</span>
                  )}
                </div>

                <ul className="flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-muted">
                      <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-cyan" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <CTAButton
                  href={plan.popular ? calendlyLink() : "#contact"}
                  variant={plan.popular ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </CTAButton>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
