import ReactLoading from "react-loading";

import { ButtonProps } from "./interfaces";
import * as S from "./styles";

export function Button({ loading, text, onClick, type = "button", form }: ButtonProps) {
  return (
    <S.Button type={type} disabled={loading} onClick={onClick} form={form}>
      {loading ? <ReactLoading type="spin" color="#fff" /> : text}
    </S.Button>
  );
}
