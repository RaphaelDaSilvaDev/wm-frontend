import { toast } from "react-hot-toast";

import * as S from "./styles";

import Error from "../../assets/error.png";
import Success from "../../assets/success.png";
import Warning from "../../assets/warning.png";
import { X } from "phosphor-react";

interface ToastProps {
  message: string;
  styleToast: "success" | "error" | "warning";
}

export function ToastStyle({ message, styleToast }: ToastProps) {
  const errorStyle = {
    style: {
      border: "1px solid #F93E32",
      borderBottom: "4px solid #F93E32",
      background: "#FEDAD8",
      padding: "16px",
      color: "#000",
      maxWidth: 500,
      minWidth: 500,
    },
    duration: 4000,
    icon: <img src={Error} style={{ height: "38px" }} />,
  };

  const successStyle = {
    style: {
      border: "1px solid #32F946",
      borderBottom: "4px solid #32F946",
      background: "#D7FEDB",
      padding: "16px",
      color: "#000",
      maxWidth: 500,
      minWidth: 500,
    },
    duration: 2000,
    icon: <img src={Success} style={{ height: "38px" }} />,
  };

  const warningStyle = {
    style: {
      border: "1px solid #F9ED32",
      borderBottom: "4px solid #F9ED32",
      background: "#FEFBD8",
      padding: "16px",
      color: "#000",
      maxWidth: 500,
      minWidth: 500,
    },
    duration: 4000,
    icon: <img src={Warning} style={{ height: "38px" }} />,
  };

  const style =
    styleToast === "error" ? errorStyle : styleToast === "success" ? successStyle : warningStyle;

  const error = styleToast === "error" ? "Erro" : styleToast === "success" ? "Sucesso" : "Atenção";

  return toast(
    (t) => (
      <S.Container>
        <S.Header>
          <h1>{error}</h1>
          <S.Button onClick={() => toast.dismiss(t.id)}>
            <X size={20} />
          </S.Button>
        </S.Header>
        <span>{message}</span>
      </S.Container>
    ),
    {
      ...style,
      position: "bottom-right",

      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    }
  );
}
