import * as z from "zod";

export const BasicDataSchema = z.object({
  name: z.string().nonempty(),
  socialName: z.string().nonempty(),
  document: z.string().nonempty(),
  cep: z.string().nonempty(),
  addressState: z.string().nonempty(),
  addressCity: z.string().nonempty(),
  addressStreet: z.string().nonempty(),
  addressNumber: z.string().nonempty(),
  addressDistrict: z.string().nonempty(),
  phoneNumber: z.string().nonempty(),
  cellphoneNumber: z.string().nonempty(),
  email: z.string().nonempty(),
});

export type BasicDataSchemaType = z.infer<typeof BasicDataSchema>;
