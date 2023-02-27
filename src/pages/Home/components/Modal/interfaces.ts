export interface IServiceRequest {
  id: string | null;
  client_name: string | null;
  client_phone: string | null;
  vehicle_plate: string | null;
  vehicle_model: string | null;
  observation: string | null;
  delivery: string | null;
  price: number | null;
  status: string | null;
  responsible: string | null;
  user: IUser;
}

export interface IServiceUpdate {
  id?: string;
  observation: string;
  delivery_date: string;
  value: number;
  responsible?: string;
}

export interface IUser {
  id: string | null;
  name: string | null;
  username: string | null;
}

export interface IServiceCreate {
  name: string;
  phone: string;
  vehicle_plate: string;
  vehicle_model: string;
  observation: string;
  delivery_date: string;
  value: number;
  responsible?: string;
}
