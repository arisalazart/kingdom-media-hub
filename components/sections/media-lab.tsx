import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";

export function MediaLab() {
  const t = useTranslations("mediaLab");
  const projects = t.raw("projects") as Array<{
    id: string; title: string; category: string;
    metric: string; metricLabel: string; description: string;
  }>;

  return (
    <section id="media-lab" className="bg-section-alt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-14"
        />

        {/* Asymmetric grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Hero project — spans 2 rows on desktop */}
          <Reveal className="lg:row-span-2">
            <GlassCard className="group h-full min-h-[280px] overflow-hidden p-0 lg:min-h-[400px]">
              <ProjectCard project={projects[0]} large />
            </GlassCard>
          </Reveal>

          {projects.slice(1).map((project, i) => (
            <Reveal key={project.id} delay={i * 0.07}>
              <GlassCard className="group overflow-hidden p-0">
                <ProjectCard project={project} />
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: { title: string; metric: string; metricLabel: string; description: string };
  large?: boolean;
}) {
  return (
    <div className={`relative flex flex-col justify-end ${large ? "min-h-[400px]" : "min-h-[200px]"} bg-gray-100`}>
      {/* Placeholder visual */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />

      {/* Metric overlay — visible on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="font-display font-extrabold text-cyan" style={{ fontSize: large ? "4rem" : "3rem", lineHeight: 1 }}>
          {project.metric}
        </p>
        <p className="mt-2 text-center text-sm font-semibold text-white">{project.metricLabel}</p>
        <p className="mt-3 max-w-[200px] text-center text-xs text-white/60">{project.description}</p>
      </div>

      {/* Bottom label */}
      <div className="relative p-5">
        <p className="font-display text-sm font-semibold text-ink">{project.title}</p>
        <p className="mt-0.5 font-mono text-xs text-muted">
          {project.metric} {project.metricLabel}
        </p>
      </div>
    </div>
  );
}
