export interface VehiclePayload {
  model: string;
  plate: string;
  brand: string;
  launchYear: string;
  fuel: string;
  color: string;
  clientId: string;
}

export interface IVehicleRequest {
  model: string;
  plate: string;
  brand: string;
  launchYear: string;
  modelYear: string;
  fuel: string;
  color: string;
  clientId: string;
  Client: IClientRequest;
}

interface IClientRequest {
  id: string;
  name: string;
}

export interface IVehicleUpdate {
  client_id: string;
}
