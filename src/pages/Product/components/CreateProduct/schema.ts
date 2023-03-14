import * as z from "zod";

export const ProductSchema = z.object({
  name: z.string().nonempty(),
  brand: z.string().nonempty(),
  quantity: z.number().min(0),
  minQuantity: z.number().min(0),
  valueToBuy: z.number().min(0),
  valueToSell: z.number().min(0),
  description: z.string().nonempty(),
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
