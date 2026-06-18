import { useTranslations } from "next-intl";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function CaseStudies() {
  const t = useTranslations("caseStudies");
  const cases = t.raw("cases") as Array<{
    metric: string; label: string; client: string; country: string;
  }>;

  return (
    <section id="results" className="bg-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          dark
          className="mb-14"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.metric + c.client} delay={i * 0.1}>
              <article className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-dark-2 p-8 transition-all duration-300 hover:border-cyan/25 hover:shadow-[0_0_0_1px_rgba(51,204,255,0.15),0_20px_60px_rgba(0,0,0,0.30)]">
                {/* Dominant metric */}
                <div>
                  <p
                    className="font-display font-extrabold leading-none tracking-[-0.04em] text-cyan"
                    style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}
                  >
                    {c.metric}
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold text-white">{c.label}</p>
                </div>

                {/* Client info */}
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/70">{c.client}</p>
                    <p className="font-mono text-xs uppercase tracking-wider text-white/30">{c.country}</p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all group-hover:border-cyan/30 group-hover:text-cyan">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
