import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";

import * as S from "./styles";

export function NotFound() {
  const navigation = useNavigate();

  function handleBackToHome() {
    navigation("/");
  }

  return (
    <S.Container>
      <h1>404</h1>
      <h2>Ops, página não encontrada</h2>
      <S.BackToHome onClick={handleBackToHome}>Ir para Home</S.BackToHome>
    </S.Container>
  );
}
