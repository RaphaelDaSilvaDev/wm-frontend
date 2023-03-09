export interface IServiceRequest {
  id: string;
  observation: string;
  delivery: string;
  price: number;
  status: string;
  responsible: string;
  createdAt: string;
  updatedAt: string;
  clientId: string;
  vehicleId: string;
  user: User;
  client: Client;
  serviceProducts: ServiceProduct[];
  vehicle: Vehicle;
}

interface User {
  id: string;
  name: string;
}

interface Client {
  id: string;
  name: string;
  document: string;
  bornAt: string;
  phoneNumber: string;
  cellphoneNumber: string;
  email: string;
  cep: string;
  addressState: string;
  addressCity: string;
  addressDistrict: string;
  addressStreet: string;
  addressNumber: string;
  createdAt: string;
  updatedAt: string;
}

interface ServiceProduct {
  id: string;
  serviceId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productId: string;
}

interface Vehicle {
  id: string;
  model: string;
  plate: string;
  brand: string;
  launchYear: string;
  modelYear: string;
  fuel: string;
  color: string;
  clientId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IManagerShow {
  id: string;
  plate: JSX.Element;
  vehicle: JSX.Element;
  client: JSX.Element;
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
