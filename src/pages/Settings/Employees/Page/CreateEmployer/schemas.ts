import * as z from "zod";

export const CreateEmployerSchema = z.object({
  name: z.string().nullable(),
  username: z.string().nullable(),
  document: z.string().nullable(),
  bornAt: z.string().nullable(),
  phoneNumber: z.string().nullable(),
  cellphoneNumber: z.string().nullable(),
  email: z.string().nullable(),
  addressState: z.string().nullable(),
  addressCity: z.string().nullable(),
  addressDistrict: z.string().nullable(),
  addressStreet: z.string().nullable(),
  addressNumber: z.string().nullable(),
  password: z.string().nullable(),
});

export type CreateEmployerSchemaType = z.infer<typeof CreateEmployerSchema>;
