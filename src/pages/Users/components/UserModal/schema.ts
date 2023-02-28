import * as z from "zod";

export const managerUserSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
});

export type managerUserSchemaType = z.infer<typeof managerUserSchema>;
