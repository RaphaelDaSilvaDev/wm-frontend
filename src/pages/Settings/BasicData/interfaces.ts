export interface IBasicDataRequest {
  id: string;
  name: string;
  socialName: string;
  document: string;
  cep: string;
  addressState: string;
  addressCity: string;
  addressStreet: string;
  addressNumber: string;
  addressDistrict: string;
  clientCode: string;
  phoneNumber: string;
  cellphoneNumber: string;
  email: string;
  avatar: string | null;
  status: boolean;
  paymentValue: number;
  paymentDate: string;
  contractorName: string;
  contractorDocument: string;
}

export interface IBasicDataUpdate {
  cep?: string;
  addressState?: string;
  addressCity?: string;
  addressStreet?: string;
  addressNumber?: string;
  addressDistrict?: string;
  phoneNumber?: string;
  cellphoneNumber?: string;
  email?: string;
  avatar?: string | any;
}
