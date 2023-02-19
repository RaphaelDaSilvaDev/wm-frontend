import ReactLoading from "react-loading";

import { ButtonProps } from "./interfaces";
import * as S from "./styles";

export function Button({ loading, text }: ButtonProps) {
  return (
    <S.Button disabled={loading}>
      {loading ? <ReactLoading type="spin" color="#fff" /> : text}
    </S.Button>
  );
}
