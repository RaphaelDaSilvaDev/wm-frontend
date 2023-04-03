import { ArrowsCounterClockwise, Check, Clock, HandCoins, X } from "@phosphor-icons/react";

export const status: {
  [key: string | number]: {
    color: string;
    name: string;
    icon: JSX.Element;
  };
} = {
  unpaid: { color: "#D84A38", name: "Não Pago", icon: <X color="#fff" /> },
  pending_payment: { color: "#FFAA24", name: "Pagamento Pendente", icon: <Clock color="#fff" /> },
  paid: { color: "#35AA47", name: "Pago", icon: <Check color="#fff" /> },
  pending_refund: {
    color: "#AACC00",
    name: "Reembolso Pendente",
    icon: <ArrowsCounterClockwise color="#fff" />,
  },
  refunded: { color: "#4B8DF8", name: "Reembolsado", icon: <HandCoins color="#fff" /> },
};
