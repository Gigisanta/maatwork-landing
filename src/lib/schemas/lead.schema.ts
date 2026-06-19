import { z } from "zod";

export const leadSchema = z.object({
  nombre: z.string().min(2).max(100),
  whatsapp: z.string().min(8).max(32),
  email: z.string().email().optional().or(z.literal("")),
  necesidad: z
    .enum(["producto", "a_medida", "automatizacion", "integracion", "no_define"])
    .default("no_define"),
  rubro: z.string().max(80).optional().or(z.literal("")),
  problema: z.string().min(3).max(1000).optional().or(z.literal("")),
  source: z.enum(["landing_page", "contact_form", "roi_calculator", "footer_newsletter"]).default("landing_page"),
  utm_source: z.string().max(120).optional(),
  utm_medium: z.string().max(120).optional(),
  utm_campaign: z.string().max(120).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
