import { z } from "zod";

/**
 * Contact / lead-qualification schema.
 * Shared by the client form (React Hook Form resolver) and the /api/contact route
 * so validation is guaranteed identical on both sides.
 */
export const projectTypes = [
  "ai-voice-agents",
  "automation",
  "website",
  "content-production",
  "training",
  "full-ecosystem",
] as const;

export const revenueBands = [
  "under-10k",
  "10k-50k",
  "50k-250k",
  "250k-plus",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "validation.name").max(80),
  company: z.string().min(1, "validation.company").max(120),
  industry: z.string().min(2, "validation.industry").max(80),
  revenue: z.enum(revenueBands, { message: "validation.revenue" }),
  email: z.string().email("validation.email"),
  phone: z.string().min(6, "validation.phone").max(30),
  projectType: z.enum(projectTypes, { message: "validation.projectType" }),
  message: z.string().max(1000).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ProjectType = (typeof projectTypes)[number];
export type RevenueBand = (typeof revenueBands)[number];
