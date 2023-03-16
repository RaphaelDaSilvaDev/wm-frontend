export interface IVehicleRequest {
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
  Client: Client;
}

interface Client {
  id: string;
  name: string;
}

export interface IVehicleToManager {
  id: string;
  edit: JSX.Element;
  plate: JSX.Element;
  model: JSX.Element;
  brand: JSX.Element;
  client: JSX.Element;
}
