import * as z from "zod";

export const CreateVehicleSchema = z.object({
  model: z.string(),
  plate: z.string(),
  brand: z.string(),
  launchYear: z.string(),
  fuel: z.string(),
  color: z.string(),
});

export type CreateVehicleSchemaType = z.infer<typeof CreateVehicleSchema>;
