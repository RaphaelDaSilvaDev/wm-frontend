import * as z from "zod";

export const ServiceSchema = z.object({
  delivery_date: z.string().nonempty(),
  delivery_hour: z.string().nonempty(),
  client_observation: z.string().nonempty(),
  responsible_observation: z.string().optional(),
  price: z.number(),
  discountValue: z.number(),
  discountPercentage: z.number(),
});

export type ServiceSchemaType = z.infer<typeof ServiceSchema>;
