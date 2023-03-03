import * as z from "zod";

export const loginSchema = z
  .object({
    clientCode: z.string().nonempty({ message: "Insira o código da Oficina" }),
    username: z.string().nonempty({ message: "Insira um usuário" }),
    password: z.string().nonempty({ message: "Insira uma senha" }),
  })
  .required({
    clientCode: true,
    username: true,
    password: true,
  });

export type loginSchemaType = z.infer<typeof loginSchema>;
