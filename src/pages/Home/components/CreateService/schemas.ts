import * as z from "zod";

export const ServiceSchema = z.object({
  delivery_date: z.string().nonempty({ message: "Insira a data de entrega!" }),
  delivery_hour: z.string().nonempty({ message: "Insira a hora de entrega!" }),
  client_observation: z.string().nonempty({ message: "Insira a observação do Cliente!" }),
  responsible_observation: z.string().optional(),
  price: z.number().optional(),
  discountValue: z.number().optional(),
  discountPercentage: z.number().optional(),
});

export type ServiceSchemaType = z.infer<typeof ServiceSchema>;
