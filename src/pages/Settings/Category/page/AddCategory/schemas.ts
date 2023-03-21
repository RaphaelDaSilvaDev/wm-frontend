import * as z from "zod";
import { string } from "zod";

export const CategorySchema = z.object({
  name: string().nonempty(),
});

export type CategorySchemaType = z.infer<typeof CategorySchema>;
