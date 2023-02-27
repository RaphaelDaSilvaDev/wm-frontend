import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Bullet } from "../../components/Bullet";
import { IManagerShow, IServiceRequest } from "./interface";
import { status } from "./labels";

export function Parse(data: IServiceRequest[]): IManagerShow[] {
  return data.map((service) => {
    return {
      id: service.id,
      plate: <span>{service.vehicle_plate}</span>,
      model: <span>{service.vehicle_model}</span>,
      client: <span>{service.client_name}</span>,
      entry_date: <span>{format(new Date(service.createdAt), "Pp", { locale: ptBR })}</span>,
      delivery_date: (
        <span>
          {format(new Date(service.delivery ? service.delivery : ""), "Pp", { locale: ptBR })}
        </span>
      ),
      responsible: <span>{service.user.name}</span>,
      status: <Bullet color={status[service.status].color} content={status[service.status].name} />,
      status_value: service.status,
    };
  });
}
