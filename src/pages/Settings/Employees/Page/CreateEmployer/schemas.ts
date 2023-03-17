import * as z from "zod";

export const CreateEmployerSchema = z.object({
  name: z.string().nonempty(),
  username: z.string().nonempty(),
  document: z.string().nonempty(),
  bornAt: z.string().nonempty(),
  phoneNumber: z.string().nonempty(),
  cellphoneNumber: z.string().nonempty(),
  email: z.string().nonempty(),
  addressState: z.string().nonempty(),
  addressCity: z.string().nonempty(),
  addressDistrict: z.string().nonempty(),
  addressStreet: z.string().nonempty(),
  addressNumber: z.string().nonempty(),
});

export type CreateEmployerSchemaType = z.infer<typeof CreateEmployerSchema>;
