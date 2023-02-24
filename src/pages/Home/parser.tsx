import { Bullet } from "../../components/Bullet";
import { IManagerShow, IServiceRequest } from "./interface";
import { status } from "./labels";

export function Parse(data: IServiceRequest[]): IManagerShow[] {
  return data.map((service) => {
    return {
      plate: <span>{service.vehicle_plate}</span>,
      model: <span>{service.vehicle_model}</span>,
      client: <span>{service.client_name}</span>,
      entry_date: <span>{new Date(service.createdAt).toLocaleString()}</span>,
      delivery_date: (
        <span>{new Date(service.delivery ? service.delivery : "").toLocaleString()}</span>
      ),
      responsible: <span>{service.user.name}</span>,
      status: <Bullet color={status[service.status].color} content={status[service.status].name} />,
    };
  });
}
