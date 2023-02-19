import { ReactNode } from "react";
import { Wrapper } from "../../layout/Wrapper";
import * as S from "./styles";

interface Props {
  children: ReactNode;
}

export function Page({ children }: Props) {
  return (
    <S.Container>
      <Wrapper>{children}</Wrapper>
    </S.Container>
  );
}
