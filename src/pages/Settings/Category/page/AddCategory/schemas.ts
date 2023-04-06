import * as z from "zod";
import { string } from "zod";

export const CategorySchema = z.object({
  name: string().nonempty({ message: "Insira o nome da Categoria!" }),
});

export type CategorySchemaType = z.infer<typeof CategorySchema>;
