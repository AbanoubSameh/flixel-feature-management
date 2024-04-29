import * as z from "zod";

export const createFeatureSchema = z.object({
  applicationId: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
});
