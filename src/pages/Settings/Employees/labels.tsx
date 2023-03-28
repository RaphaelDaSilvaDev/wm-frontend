import { SealCheck, Check, Minus } from "@phosphor-icons/react";

export const status: {
  [key: string]: {
    color: string;
    name: string;
    icon: JSX.Element;
  };
} = {
  access: { color: "#4B8DF8", name: "Ativo com Acesso", icon: <SealCheck color="#fff" /> },
  active: { color: "#35AA47", name: "Ativo", icon: <Check color="#fff" /> },
  inactive: { color: "#D84A38", name: "Inativo", icon: <Minus color="#FFF" /> },
};
