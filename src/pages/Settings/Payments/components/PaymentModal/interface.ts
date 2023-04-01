export interface IConfirmPayment {
  clientName: string;
  clientSocialName: string;
  clientDocument: string;
  price: string | null;
  due?: string | null;
  qrCodeText?: string | null;
  qrCode?: string | null;
}
