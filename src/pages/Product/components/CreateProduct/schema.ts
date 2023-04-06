import * as z from "zod";

export const ProductSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do Produto!" }),
  brand: z.string().nonempty({ message: "Insira a marca do Produto!" }),
  quantity: z.number({ invalid_type_error: "Insira a quantidade em estoque!" }).min(0),
  minQuantity: z
    .number({ invalid_type_error: "Insira a quantidade mínima para o estoque!" })
    .min(0),
  valueToBuy: z.number({ invalid_type_error: "Insira o valor de compra!" }).min(0),
  valueToSell: z.number({ invalid_type_error: "Insira o valor de venda!" }).min(0),
  description: z.string().nonempty({ message: "Insira a descrição do Produto!" }),
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
