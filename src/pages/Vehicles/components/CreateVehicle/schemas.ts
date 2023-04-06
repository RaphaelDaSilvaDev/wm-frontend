import * as z from "zod";

export const CreateVehicleSchema = z.object({
  model: z.string().nonempty({ message: "Insira o modelo do Veículo!" }),
  plate: z.string().nonempty({ message: "Insira a placa do Veículo!" }),
  brand: z.string().nonempty({ message: "Insira a marca do Veículo!" }),
  launchYear: z.string().nonempty({ message: "Insira o ano/modelo do Veículo!" }),
  fuel: z.string().nonempty({ message: "Insira o tipo de combustível do Veículo!" }),
  color: z.string().nonempty({ message: "Insira a cor do Veículo!" }),
});

export type CreateVehicleSchemaType = z.infer<typeof CreateVehicleSchema>;
