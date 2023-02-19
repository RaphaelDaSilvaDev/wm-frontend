import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CaretDown, SignOut, UserGear, UserPlus } from "phosphor-react";

import { Wrapper } from "../../layout/Wrapper";

import { AuthToken } from "../../services/authToken";
import { AuthUserContext } from "../../services/authUserContext";

import UserSVG from "../../assets/user.svg";
import * as S from "./styles";
import { IPages, pages } from "../../utils/pages";

export function Header() {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const { info, handleSignOut } = useContext(AuthUserContext);

  const [title, setTitle] = useState<string | undefined>("");

  useEffect(() => {
    const page = pages.find((page) => page.path === pathname);
    setTitle(page?.name);
  }, [pathname]);

  useEffect(() => {
    if (!info) {
      return navigation("/login");
    }

    AuthToken(info.token);
  }, []);

  return (
    <S.Container>
      <S.Content>
        <span>{title}</span>
        <S.UserInfo onClick={() => navigation("/")}>
          <span>{info?.user?.name}</span>
          <img src={UserSVG} />
          <CaretDown size={22} />
        </S.UserInfo>
      </S.Content>
    </S.Container>
  );
}
