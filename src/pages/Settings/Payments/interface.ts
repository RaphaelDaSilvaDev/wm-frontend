export interface IPaymentsRequest {
  id: string;
  plansId: string;
  clientId: string;
  dueDate: string;
  paymentQRCode: string | null;
  paymentQRCodeText: string | null;
  paymentQRCodePrice: string | null;
  paymentQRCodeDueDate: string | null;
  paymentTxId: string | null;
  paymentE2EId: string | null;
  paymentDate: string | null;
  status: string;
  Plans: Plan;
  Client: Client;
}

interface Plan {
  id: string;
  name: string;
  description: string | null;
  itens: string[];
  value: number;
}

interface Client {
  id: string;
  name: string;
  socialName: string;
  document: string;
}

export interface IPaymentManager {
  id: string;
  generatePayment: JSX.Element;
  planName: JSX.Element;
  price: JSX.Element;
  dueDate: JSX.Element;
  status: JSX.Element;
}
