import { Pencil } from "phosphor-react";
import { IVehicleRequest, IVehicleToManager } from "./interfaces";

import * as S from "./styles";

export function VehicleParse(
  data: IVehicleRequest[],
  handleEditVehicle: (itemId: string) => void
): IVehicleToManager[] {
  return data.map((vehicle) => {
    return {
      id: vehicle.id,
      edit: (
        <S.ToolTip onClick={() => handleEditVehicle(vehicle.id)}>
          <Pencil />
        </S.ToolTip>
      ),
      plate: <span>{vehicle.plate}</span>,
      model: <span>{vehicle.model}</span>,
      brand: <span>{vehicle.brand}</span>,
      client: <span>{vehicle.Client.name}</span>,
    };
  });
}
