export interface EmployeePayload {
  name?: string | null;
  username?: string | null;
  document?: string | null;
  bornAt?: string | null;
  phoneNumber?: string | null;
  cellphoneNumber?: string | null;
  email?: string | null;
  addressState?: string | null;
  addressCity?: string | null;
  addressDistrict?: string | null;
  addressStreet?: string | null;
  addressNumber?: string | null;
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
