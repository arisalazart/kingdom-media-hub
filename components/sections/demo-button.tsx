"use client";

import { useTranslations } from "next-intl";
import { Play } from "@phosphor-icons/react";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";

export function DemoButton() {
  const tc      = useTranslations("common");
  const openDemo = useUIStore((s) => s.openDemo);

  return (
    <button
      type="button"
      onClick={() => { openDemo(); trackEvent("demo_opened", {}); }}
      className="group inline-flex items-center gap-2.5 rounded-full border border-edge-strong bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan/30 hover:shadow-md"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan/10 ring-1 ring-cyan/30 transition-transform group-hover:scale-110">
        <Play size={13} weight="fill" className="ml-0.5 text-cyan" />
      </span>
      {tc("watchDemo")}
    </button>
  );
}
