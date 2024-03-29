export interface ClientPayload {
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
}

export interface IClientRequest {
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
}

export interface IClientUpdate {
  phoneNumber?: string;
  cellphoneNumber?: string;
  email?: string;
  cep?: string;
  addressState?: string;
  addressCity?: string;
  addressDistrict?: string;
  addressStreet?: string;
  addressNumber?: string;
  addressComplement?: string;
}
