import { CaretDown } from "phosphor-react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import * as S from "./styles";

export function SideContainer() {
  const path = useLocation();

  return (
    <S.Base>
      <S.Container>
        <S.ArrowDown>
          <HashLink to={`${path.pathname}/#content`} smooth>
            <CaretDown size={24} />
          </HashLink>
        </S.ArrowDown>
      </S.Container>
    </S.Base>
  );
}
