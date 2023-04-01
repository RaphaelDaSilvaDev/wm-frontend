import { Page } from "../../../components/Page";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getClientService } from "../../Login/service";
import axios from "axios";
import { ToastStyle } from "../../../components/Toast";
import { getPaymentsService } from "./services";
import { IPaymentManager, IPaymentsRequest } from "./interface";
import { Manager } from "../../../components/Manager";
import { HeaderPayment } from "./header";
import { parserPayment } from "./parser";
import { Modal } from "../../../components/Modal";
import * as S from "./styles";
import { PaymentModal } from "./components/PaymentModal";

export function Payments() {
  const [data, setData] = useState<IPaymentsRequest[]>([]);
  const [dataToManager, setDataToManager] = useState<IPaymentManager[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentModal, setPaymentModal] = useState<JSX.Element>(<></>);

  async function GetData() {
    setLoading(true);
    try {
      const clientCode = Cookies.get("clientCode");
      if (clientCode) {
        const response = await getClientService(clientCode);
        const paymentResponse = await getPaymentsService(response.id);
        setData(paymentResponse);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading(false);
    }
  }

  function GetPayment(data: IPaymentsRequest) {
    setPaymentModal(
      <S.ModalContainer>
        <Modal
          confirmButtonText="Ok"
          setModalOpen={setPaymentModal}
          title="Fazer pagamento"
          hasCancelButton={false}
          isForm={false}
          reload={reload}
          content={<PaymentModal data={data} />}
        />
      </S.ModalContainer>
    );
  }

  function reload() {
    GetData();
  }

  useEffect(() => {
    setDataToManager(parserPayment(data, GetPayment));
  }, [data]);

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Page>
      <Manager header={HeaderPayment} body={dataToManager} loading={loading} />
      {paymentModal}
    </Page>
  );
}
