import * as z from "zod";
export const ClientSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do Cliente!" }),
  document: z.string().nonempty({ message: "Insira o documento do Cliente!" }),
  bornAt: z.z.string().nonempty({ message: "Insira a data de nascimento do Cliente!" }),
  phoneNumber: z.string().nonempty({ message: "Insira o número telefone do Cliente!" }),
  cellphoneNumber: z.string().nonempty({ message: "Insira o número de celular do Cliente!" }),
  email: z.string().nonempty({ message: "Insira o email do Cliente!" }),
  cep: z.string().nonempty({ message: "Insira o CEP do Cliente!" }),
  addressState: z.string().nonempty({ message: "Insira o estado do Cliente!" }),
  addressCity: z.string().nonempty({ message: "Insira a cidade do Cliente!" }),
  addressDistrict: z.string().nonempty({ message: "Insira o bairro do Cliente!" }),
  addressStreet: z.string().nonempty({ message: "Insira a rua do Cliente!" }),
  addressNumber: z.string().nonempty({ message: "Insira o número da casa do Cliente!" }),
});

export type ClientSchemaType = z.infer<typeof ClientSchema>;
