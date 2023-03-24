import * as z from "zod";

export const CreateEmployerSchema = z.object({
  name: z.string().nonempty(),
  username: z.string().nonempty(),
  document: z.string().optional(),
  bornAt: z.string().optional(),
  phoneNumber: z.string().optional(),
  cellphoneNumber: z.string().optional(),
  email: z.string().optional(),
  addressState: z.string().optional(),
  addressCity: z.string().optional(),
  addressDistrict: z.string().optional(),
  addressStreet: z.string().optional(),
  addressNumber: z.string().optional(),
});

export type CreateEmployerSchemaType = z.infer<typeof CreateEmployerSchema>;
