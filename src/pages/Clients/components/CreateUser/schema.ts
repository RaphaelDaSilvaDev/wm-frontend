import * as z from "zod";
export const ClientSchema = z.object({
  name: z.string(),
  document: z.string(),
  bornAt: z.z.string(),
  phoneNumber: z.string(),
  cellphoneNumber: z.string(),
  email: z.string(),
  cep: z.string(),
  addressState: z.string(),
  addressCity: z.string(),
  addressDistrict: z.string(),
  addressStreet: z.string(),
  addressNumber: z.string(),
});

export type ClientSchemaType = z.infer<typeof ClientSchema>;
