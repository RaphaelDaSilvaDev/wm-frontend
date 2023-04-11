import * as z from "zod";

export const feedbackSchema = z.object({
  title: z.string().nonempty({ message: "Insira o título!" }),
  text: z.string().nonempty({ message: "Insira o FeedBack!" }),
});

export type feedbackSchemaType = z.infer<typeof feedbackSchema>;
