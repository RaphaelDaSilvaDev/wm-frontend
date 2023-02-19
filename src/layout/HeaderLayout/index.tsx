import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import * as S from "./styles";

export function HeaderLayout() {
  return (
    <S.LayoutContainer>
      <SideBar />
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
}
