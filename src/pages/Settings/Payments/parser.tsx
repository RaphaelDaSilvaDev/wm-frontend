import { differenceInDays, format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { IPaymentManager, IPaymentsRequest } from "./interface";
import { Receipt } from "phosphor-react";
import { StatusToolTip } from "../../../components/StatusToolTip";
import { status } from "./labels";
import * as S from "./styles";

export const parserPayment = (
  data: IPaymentsRequest[],
  GetPayment: (data: IPaymentsRequest) => void
): IPaymentManager[] => {
  return data
    .filter(
      (item) =>
        (item.status === "unpaid" && differenceInDays(new Date(item.dueDate), new Date()) <= 7) ||
        item.status !== "unpaid"
    )
    .map((item) => {
      return {
        id: item.id,
        generatePayment:
          item.status === "unpaid" || item.status === "pending_payment" ? (
            <S.ToolTip onClick={() => GetPayment(item)}>
              <Receipt />
            </S.ToolTip>
          ) : (
            <></>
          ),
        planName: <span>{item.Plans.name}</span>,
        price: <span>R${item.paymentQRCodePrice}</span>,
        dueDate: <span>{format(new Date(item.dueDate), "dd-MM-yyyy", { locale: ptBr })}</span>,
        status: (
          <S.SquareContent>
            <S.Square color={status[item.status].color}>{status[item.status].icon}</S.Square>
            <span>- {status[item.status].name}</span>
          </S.SquareContent>
        ),
      };
    });
};
