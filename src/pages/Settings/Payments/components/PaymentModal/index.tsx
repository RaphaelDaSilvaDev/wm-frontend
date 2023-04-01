import { useEffect, useState } from "react";
import { IPaymentsRequest } from "../../interface";
import * as S from "./styles";
import Loading from "react-loading";
import { IConfirmPayment } from "./interface";
import { GeneratePixService } from "./service";
import axios from "axios";
import { ToastStyle } from "../../../../../components/Toast";
import { differenceInMilliseconds, format } from "date-fns";
import { Clipboard } from "@phosphor-icons/react";

interface Props {
  data: IPaymentsRequest;
}

export function PaymentModal(data: Props) {
  const [confirmPayment, setConfirPayment] = useState<IConfirmPayment>();
  const [loading, setLoading] = useState<boolean>(true);

  async function GeneratePix() {
    try {
      const response = await GeneratePixService(data.data.id);
      setConfirPayment({
        clientDocument: response.clientDocument,
        clientName: response.clientName,
        clientSocialName: response.clientSocialName,
        due: response.due,
        price: response.price,
        qrCode: response.generatePix.imagemQrcode,
        qrCodeText: response.generatePix.qrcode,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading(false);
    }
  }

  console.log(
    differenceInMilliseconds(
      new Date(data.data.paymentQRCodeDueDate ? data.data.paymentQRCodeDueDate : ""),
      new Date()
    )
  );

  useEffect(() => {
    if (
      !data.data.paymentTxId ||
      differenceInMilliseconds(
        new Date(data.data.paymentQRCodeDueDate ? data.data.paymentQRCodeDueDate : ""),
        new Date()
      ) <= 0
    ) {
      GeneratePix();
    } else {
      setConfirPayment({
        clientDocument: data.data.Client.document,
        clientName: data.data.Client.name,
        clientSocialName: data.data.Client.socialName,
        due: data.data.paymentQRCodeDueDate,
        price: data.data.paymentQRCodePrice,
        qrCode: data.data.paymentQRCode,
        qrCodeText: data.data.paymentQRCodeText,
      });
      setLoading(false);
    }
  }, []);

  return (
    <S.Container>
      {loading ? (
        <S.LoadingContainer>
          <Loading type="spin" />
        </S.LoadingContainer>
      ) : (
        <S.Content>
          <span>Nome: {confirmPayment?.clientName}</span>
          <span>Razão Social: {confirmPayment?.clientSocialName}</span>
          <span>CNPJ: {confirmPayment?.clientDocument}</span>
          <span>Valor: R${confirmPayment?.price}</span>
          <img src={confirmPayment?.qrCode ? confirmPayment.qrCode : ""} />
          <S.InputContainer>
            <S.Input
              value={confirmPayment?.qrCodeText ? confirmPayment?.qrCodeText : ""}
              disabled
              readOnly
            />
            <S.Button
              onClick={() =>
                navigator.clipboard.writeText(
                  confirmPayment?.qrCodeText ? confirmPayment?.qrCodeText : ""
                )
              }
            >
              <Clipboard />
            </S.Button>
          </S.InputContainer>
          <span>
            Validade do QRCode:{" "}
            {format(
              new Date(confirmPayment?.due ? confirmPayment?.due : ""),
              "dd/MM/yyyy - HH:mm:ss"
            )}
          </span>
          <strong>* O pagamento pode demorar alguns minutos para ser validado!</strong>
        </S.Content>
      )}
    </S.Container>
  );
}
