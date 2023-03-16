export interface IClientRequest {
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
}

export interface IManagerShowClient {
  id: string;
  edit: JSX.Element;
  name: JSX.Element;
  address: JSX.Element;
  phone: JSX.Element;
  cellPhone: JSX.Element;
  email: JSX.Element;
}
