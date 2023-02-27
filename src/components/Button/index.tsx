import ReactLoading from "react-loading";

import { ButtonProps } from "./interfaces";
import * as S from "./styles";

export function Button({ loading, text, onClick }: ButtonProps) {
  return (
    <S.Button disabled={loading} onClick={onClick}>
      {loading ? <ReactLoading type="spin" color="#fff" /> : text}
    </S.Button>
  );
}
