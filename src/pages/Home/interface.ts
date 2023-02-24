export interface IServiceRequest {
  id: string | null;
  client_name: string | null;
  client_phone: string | null;
  vehicle_plate: string | null;
  vehicle_model: string | null;
  observation: string | null;
  delivery: string | null;
  price: number | null;
  status: string;
  user: User;
  responsible: string;
  createdAt: string;
}

interface User {
  name: string;
}

export interface IManagerShow {
  plate: JSX.Element;
  model: JSX.Element;
  client: JSX.Element;
  entry_date: JSX.Element;
  delivery_date: JSX.Element;
  responsible: JSX.Element;
  status: JSX.Element;
}
