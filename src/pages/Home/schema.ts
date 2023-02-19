import * as z from "zod";

export const editSchema = z.object({
  name: z.string().optional(),
  password: z
    .union([z.string(), z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" })])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
});

export type editSchemaType = z.infer<typeof editSchema>;
