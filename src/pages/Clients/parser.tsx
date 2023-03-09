import { IManagerShowUser, IUsersRequest } from "./interfaces";

export function ParseUsers(data: IUsersRequest[]): IManagerShowUser[] {
  return data.map((item) => {
    return {
      id: item.id,
      name: <span>{item.name}</span>,
      address: <span>{item.addressCity + " - " + item.addressState}</span>,
      phone: <span>{item.phoneNumber}</span>,
      cellPhone: <span>{item.cellphoneNumber}</span>,
      email: <span>{item.email}</span>,
    };
  });
}
