import { ReactNode } from "react";
import * as S from "./styles";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <S.WrapperContainer>{children}</S.WrapperContainer>;
}
