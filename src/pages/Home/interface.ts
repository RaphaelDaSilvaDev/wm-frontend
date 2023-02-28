export interface IServiceRequest {
  id: string;
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
  id: string;
  name: string;
}

export interface IManagerShow {
  id: string;
  plate: JSX.Element;
  model: JSX.Element;
  client: JSX.Element;
  entry_date: JSX.Element;
  delivery_date: JSX.Element;
  responsible_id: string;
  responsible: JSX.Element;
  status: JSX.Element;
  status_value: string;
}

export interface IDropDown {
  element: JSX.Element;
  onClick: () => void;
  divider?: boolean;
  rules: boolean[] | [];
}
