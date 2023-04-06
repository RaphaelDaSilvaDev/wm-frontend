import * as z from "zod";

export const CreateEmployerSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do Funcionário!" }),
  username: z.string().nonempty({ message: "Insira o usuário do Funcionário!" }),
  document: z.string().nonempty({ message: "Inisra o documento do Funcionário!" }),
  bornAt: z.string().nonempty({ message: "Insira a data de nascimento do Funcionário!" }),
  phoneNumber: z.string().nonempty({ message: "Insira o número de telefone do Funcionário!" }),
  cellphoneNumber: z.string().nonempty({ message: "Insira o número de celular do Funcionário!" }),
  email: z.string().nullable(),
  addressState: z.string().nullable(),
  addressCity: z.string().nullable(),
  addressDistrict: z.string().nullable(),
  addressStreet: z.string().nullable(),
  addressNumber: z.string().nullable(),
  password: z.string().nullable().optional(),
});

export type CreateEmployerSchemaType = z.infer<typeof CreateEmployerSchema>;
