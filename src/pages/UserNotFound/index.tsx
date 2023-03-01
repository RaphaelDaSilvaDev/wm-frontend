import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";

import * as S from "./styles";

export function UserNotFound() {
  const navigation = useNavigate();

  function handleBackToHome() {
    navigation("/");
  }

  return (
    <S.Container>
      <h1>404</h1>
      <h2>Ops, cliente não encontrado</h2>
      <h2>Entre em contato com o administrador</h2>
    </S.Container>
  );
}
