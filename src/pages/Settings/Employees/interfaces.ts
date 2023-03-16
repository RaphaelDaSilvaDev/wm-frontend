export interface EmployeRequest {
  id: string;
  name: string;
  username: string;
  document: string | null;
  bornAt: string | null;
  phoneNumber: string | null;
  cellphoneNumber: string | null;
  email: string | null;
  addressState: string | null;
  addressCity: string | null;
  addressDistrict: string | null;
  addressStreet: string | null;
  addressNumber: string | null;
  permission: string;
  avatar: string | null;
  status: string;
  createdAt: string;
}

export interface EmployeToManager {
  id: string;
  edit: JSX.Element;
  name: JSX.Element;
  cellphone: JSX.Element;
  email: JSX.Element;
  permitions: JSX.Element;
  bornAt: JSX.Element;
  createdAt: JSX.Element;
  status: JSX.Element;
}
