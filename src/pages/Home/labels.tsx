import { formatDistanceToNow } from "date-fns";
import { Check, Clock, Handshake, Minus } from "phosphor-react";

export const status: {
  [key: string | number]: {
    color: string;
    name: string;
    icon: JSX.Element;
  };
} = {
  pending: { color: "#FFAA24", name: "Pendente", icon: <Clock color="#fff" /> },
  approved: { color: "#4B8DF8", name: "Em Andamento", icon: <Check color="#fff" /> },
  denied: { color: "#D84A38", name: "Finalizado", icon: <Minus color="#fff" /> },
  delivered: { color: "#35AA47", name: "Entregue", icon: <Handshake color="#fff" /> },
};
