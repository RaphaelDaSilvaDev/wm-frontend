import { Outlet } from "react-router-dom";

import { SideContainer } from "../../components/SideContainer";

import * as S from "./styles";

export function SideComponentLayout() {
  return (
    <S.LayoutContainer>
      <SideContainer />
      <Outlet />
    </S.LayoutContainer>
  );
}
