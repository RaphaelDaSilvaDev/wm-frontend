export interface EmployeePayload {
  name: string;
  username: string;
  document?: string;
  bornAt?: string;
  phoneNumber?: string;
  cellphoneNumber?: string;
  email?: string;
  addressState?: string;
  addressCity?: string;
  addressDistrict?: string;
  addressStreet?: string;
  addressNumber?: string;
}

export interface IEmployeeRequest {
  name: string;
  username: string;
  document: string;
  bornAt: string;
  phoneNumber: string;
  cellphoneNumber: string;
  email: string;
  addressState: string;
  addressCity: string;
  addressDistrict: string;
  addressStreet: string;
  addressNumber: string;
  avatar: string | null;
}

export interface IEmployeeUpdate {
  phoneNumber?: string;
  cellphoneNumber?: string;
  email?: string;
  addressState?: string;
  addressCity?: string;
  addressDistrict?: string;
  addressStreet?: string;
  addressNumber?: string;
  avatar?: string | null;
}
