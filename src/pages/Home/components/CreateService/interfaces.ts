export interface IResponsible {
  value: string | null;
  label: string | null;
}

export interface IResponsibleRequest {
  id: string;
  name: string;
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
}

export interface IServiceRequest {
  id: string;
  client_observation: string;
  responsible_observation: string;
  delivery: string;
  price: number;
  status: string;
  responsible: string;
  createdAt: string;
  clientId: string;
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
  };
}

export interface IServiceProductRequest {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    brand: string;
    valueToBuy: number;
    description: string;
  };
}

export interface IServiceProductToManager {
  id: string;
  amount: number;
  quantity: JSX.Element;
  product: JSX.Element;
  responsible: JSX.Element;
  value: JSX.Element;
  total: JSX.Element;
  status: JSX.Element;
}
