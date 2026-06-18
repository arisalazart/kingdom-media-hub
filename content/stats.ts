export interface Stat {
  key: "businesses" | "projects" | "automations" | "leads";
  value: number;
  suffix?: string;
  prefix?: string;
}

export const stats: Stat[] = [
  { key: "businesses", value: 120, suffix: "+" },
  { key: "projects",   value: 340, suffix: "+" },
  { key: "automations", value: 85, suffix: "+" },
  { key: "leads",      value: 18,  suffix: "k+" },
];
