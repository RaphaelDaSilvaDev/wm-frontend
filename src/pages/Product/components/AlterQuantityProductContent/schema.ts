import * as z from "zod";

export const AlterQuantityProduct = z.object({
  quantity: z.number().min(0),
});

export type AlterQuantityProductType = z.infer<typeof AlterQuantityProduct>;
