export interface IClientRequest {
  name: string;
  document: string;
  addressState: string;
  addressCity: string;
  addressStreet: string;
  addressNumber: string;
  subdomain: string;
  avatar: string | null;
  status: boolean;
  paymentValue: number;
  paymentDate: string;
  contractorName: string;
  contractorDocument: string;
  createdAt: string;
}
