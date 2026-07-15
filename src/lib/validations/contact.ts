import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
  subject: z.string().trim().max(160).optional(),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;
