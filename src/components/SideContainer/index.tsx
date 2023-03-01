import { CaretDown } from "phosphor-react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IClientRequest } from "../../pages/Login/interfaces";

import * as S from "./styles";

export function SideContainer() {
  const path = useLocation();
  const [cookies] = useCookies(["client"]);
  const [client, setClient] = useState<IClientRequest>();

  useEffect(() => {
    setClient(cookies.client);
  }, [cookies]);

  return (
    <S.Base>
      <S.Container>
        <S.LogoContainer>
          <img src={client?.avatar} />
          <span>{client?.name}</span>
        </S.LogoContainer>
        <S.ArrowDown>
          <HashLink to={`${path.pathname}/#content`} smooth>
            <CaretDown size={24} />
          </HashLink>
        </S.ArrowDown>
        <S.Footer>
          <span>© 2023 WM WorkShop Manager - Todos os direitos reservados.</span>
        </S.Footer>
      </S.Container>
    </S.Base>
  );
}
