import { IVehicleRequest, IVehicleToManager } from "./interfaces";

export function VehicleParse(data: IVehicleRequest[]): IVehicleToManager[] {
  return data.map((vehicle) => {
    return {
      id: vehicle.id,
      plate: <span>{vehicle.plate}</span>,
      model: <span>{vehicle.model}</span>,
      brand: <span>{vehicle.brand}</span>,
      client: <span>{vehicle.Client.name}</span>,
    };
  });
}
