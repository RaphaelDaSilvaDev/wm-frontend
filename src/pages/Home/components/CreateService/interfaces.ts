export interface IResponsible {
  value: string | null;
  label: string | null;
}

export interface IResponsibleRequest {
  id: string;
  name: string;
  status?: string;
}

export interface ICreateService {
  client_observation: string;
  responsible_observation: string;
  delivery: Date;
  price: number;
  status?: string;
  responsible: string;
  clientId: string;
  vehicleId: string;
}

export interface IEditService {
  delivery?: Date;
  responsible?: string;
  responsible_observation?: string;
  price?: number;
  discountValue?: number | null;
  discountPercentage?: number | null;
}

export interface IServiceRequest {
  id: string;
  client_observation: string;
  responsible_observation: string;
  delivery: string;
  price: number;
  discountValue?: number;
  discountPercentage?: number;
  status: string;
  responsible: string;
  createdAt: string;
  vehicleId: string;
  user: {
    id: string;
    name: string;
  };
  client: {
    id: string;
    name: string;
  };
  serviceProducts: [];
  vehicle: {
    id: string;
    model: string;
    plate: string;
    brand: string;
    Client: Client;
  };
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
export interface IServiceProductRequest {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    brand: string;
    valueToSell: number;
    description: string;
  };
}

export interface IServiceProductToManager {
  id: string;
  amount: number;
  edit: JSX.Element;
  quantity: JSX.Element;
  product: JSX.Element;
  value: JSX.Element;
  total: JSX.Element;
}

export interface IProductServiceUpdate {
  serviceId: string;
  productId: string;
  quantity: number;
}
