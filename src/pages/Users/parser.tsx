import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Bullet } from "../../components/Bullet";
import { status } from "./labels";
import { IManagerShowUser, IUsersRequest } from "./interfaces";

export function ParseUsers(data: IUsersRequest[]): IManagerShowUser[] {
  return data.map((item) => {
    return {
      id: item.id,
      name: <span>{item.name}</span>,
      username: <span>{item.username}</span>,
      createdAt: <span>{format(new Date(item.createdAt), "Pp", { locale: ptBR })}</span>,
      status: (
        <Bullet
          color={status[item.status === true ? 1 : 0].color}
          content={status[item.status === true ? 1 : 0].name}
        />
      ),
      status_value: item.status,
    };
  });
}
