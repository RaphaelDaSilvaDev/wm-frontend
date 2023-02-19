import * as z from "zod";

export const loginSchema = z
  .object({
    username: z.string().nonempty({ message: "Insira um usuário" }),
    password: z.string().nonempty({ message: "Insira uma senha" }),
  })
  .required({
    username: true,
    password: true,
  });

export type loginSchemaType = z.infer<typeof loginSchema>;
