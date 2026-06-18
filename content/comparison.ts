export interface ComparisonRow {
  featureKey: string;
  agency: boolean;
  freelancer: boolean;
  kingdom: boolean;
  highlight?: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { featureKey: "aiVoice",     agency: false, freelancer: false, kingdom: true, highlight: true },
  { featureKey: "automation",  agency: false, freelancer: false, kingdom: true, highlight: true },
  { featureKey: "crm",         agency: false, freelancer: false, kingdom: true },
  { featureKey: "websites",    agency: true,  freelancer: true,  kingdom: true },
  { featureKey: "content",     agency: true,  freelancer: true,  kingdom: true },
  { featureKey: "training",    agency: false, freelancer: false, kingdom: true },
  { featureKey: "revenue",     agency: false, freelancer: false, kingdom: true, highlight: true },
  { featureKey: "ecosystem",   agency: false, freelancer: false, kingdom: true, highlight: true },
];
