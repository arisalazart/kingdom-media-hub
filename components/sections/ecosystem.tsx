import { useTranslations } from "next-intl";
import { Storefront, FilmSlate, GraduationCap, Lightning } from "@phosphor-icons/react/dist/ssr";
import type { IconWeight } from "@phosphor-icons/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { OrganicBlob } from "@/components/ui/organic-blob";

export function Ecosystem() {
  const t = useTranslations("ecosystem");

  return (
    <section id="ecosystem" className="relative overflow-hidden bg-section-alt py-24 sm:py-32">
      <OrganicBlob variant="soft" className="-right-40 top-20 h-[500px] w-[500px]" slow />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-14"
        />

        <Reveal variant="scale">
          {/* Desktop: left column (Agency top, MediaLab+Academy bottom) + right Core */}
          <div className="hidden gap-4 lg:flex">
            {/* Left column */}
            <div className="flex flex-[2] flex-col gap-4">
              {/* Agency — top, tall */}
              <GlassCard className="flex-1 p-7">
                <EngineCard engineKey="agency" Icon={Storefront} t={t} />
              </GlassCard>
              {/* MediaLab + Academy — bottom row */}
              <div className="grid flex-1 grid-cols-2 gap-4">
                <GlassCard className="p-6">
                  <EngineCard engineKey="mediaLab" Icon={FilmSlate} t={t} />
                </GlassCard>
                <GlassCard className="p-6">
                  <EngineCard engineKey="academy" Icon={GraduationCap} t={t} />
                </GlassCard>
              </div>
            </div>

            {/* Kingdom Core — right, full height */}
            <GlassCard
              variant="cyan"
              className="relative flex flex-[3] flex-col justify-between overflow-hidden p-9"
            >
              <OrganicBlob
                variant="soft"
                className="left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2"
              />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10">
                  <Lightning size={24} className="text-cyan" weight="duotone" />
                </span>
                <h3 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink">
                  {t("coreTitle")}
                </h3>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
                  {t("coreDesc")}
                </p>
              </div>
              <EcosystemConnector />
            </GlassCard>
          </div>

          {/* Mobile / tablet: vertical stack */}
          <div className="flex flex-col gap-4 lg:hidden">
            {/* Core first on mobile */}
            <GlassCard variant="cyan" className="relative overflow-hidden p-7">
              <OrganicBlob variant="soft" className="right-0 top-0 h-48 w-48" />
              <div className="relative">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10">
                  <Lightning size={20} className="text-cyan" weight="duotone" />
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">
                  {t("coreTitle")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t("coreDesc")}</p>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {(["agency", "mediaLab", "academy"] as const).map((key, i) => {
                const icons = [Storefront, FilmSlate, GraduationCap];
                const Icon = icons[i];
                return (
                  <GlassCard key={key} className="p-5">
                    <EngineCard engineKey={key} Icon={Icon} t={t} compact />
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type EngineKey = "agency" | "mediaLab" | "academy";

function EngineCard({
  engineKey,
  Icon,
  t,
  compact = false,
}: {
  engineKey: EngineKey;
  Icon: React.ComponentType<{ size: number; weight?: IconWeight; className?: string }>;
  t: ReturnType<typeof useTranslations>;
  compact?: boolean;
}) {
  const items = t.raw(`${engineKey}.items`) as string[];
  return (
    <div>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
        <Icon size={20} weight="duotone" className="text-ink" />
      </span>
      <h3 className={`mt-4 font-display font-bold tracking-tight text-ink ${compact ? "text-base" : "text-xl"}`}>
        {t(`${engineKey}.name`)}
      </h3>
      <p className="eyebrow mt-0.5">{t(`${engineKey}.tagline`)}</p>
      {!compact && (
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted">
              <span className="h-1 w-1 shrink-0 rounded-full bg-cyan" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function EcosystemConnector() {
  return (
    <div className="relative mt-10">
      <div className="flex items-center justify-between gap-2">
        {["Agency", "Media Lab", "Academy"].map((label) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan/40" />
            <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted/60">
              {label}
            </span>
          </div>
        ))}
      </div>
      <svg
        className="absolute inset-x-0 top-1 w-full"
        height="2"
        viewBox="0 0 300 2"
        fill="none"
        aria-hidden
      >
        <line x1="0" y1="1" x2="300" y2="1" stroke="#33CCFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.5s" repeatCount="indefinite" />
        </line>
      </svg>
    </div>
  );
}
