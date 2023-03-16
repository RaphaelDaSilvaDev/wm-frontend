import { Check, Minus, X } from "phosphor-react";

export const status: {
  [key: string]: {
    color: string;
    name: string;
    icon: JSX.Element;
  };
} = {
  active: { color: "#35AA47", name: "Ativo", icon: <Check color="#fff" /> },
  inactive: { color: "#FFaa24", name: "Inativo", icon: <Minus color="#FFF" /> },
  off: { color: "#D84a38", name: "Desligado", icon: <X color="#fff" /> },
};
