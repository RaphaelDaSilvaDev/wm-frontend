import * as z from "zod";

export const managerServiceSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do Cliente" }),
  phone: z.string().nonempty({ message: "Insira o telefone do Cliente" }),
  vehicle_model: z
    .string()
    .nonempty({ message: "Insira o modelo do Veículo" })
    .transform((value) => value.toUpperCase()),
  vehicle_plate: z.string().nonempty({ message: "Insira a placa do Veículo" }),
  observation: z.string().nonempty({ message: "Insira uma Observação" }),
  delivery_date: z.string().nonempty({ message: "Insira uma data para entrega" }),
  value: z.number().min(1),
});

export type managerServiceSchemaType = z.infer<typeof managerServiceSchema>;
