import { useContext, useEffect, useState } from "react";
import { Users, Wrench } from "phosphor-react";

import * as S from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { pages } from "../../utils/pages";
import { AuthUserContext } from "../../services/authUserContext";
import { useCookies } from "react-cookie";
import { IClientRequest } from "../../pages/Login/interfaces";

export function SideBar() {
  const path = useLocation();
  const navigate = useNavigate();

  const { info } = useContext(AuthUserContext);
  const [cookies] = useCookies(["client"]);

  const [client, setClient] = useState<IClientRequest>();
  const [open, setOpen] = useState<boolean>(false);

  function navigateTo(path: string) {
    navigate(path);
    setOpen(false);
  }

  useEffect(() => {
    setClient(cookies.client);
  }, [cookies]);

  return (
    <>
      {info && info.user && (
        <S.Container open={open}>
          <S.Logo onClick={() => setOpen((prev) => !prev)}>
            <img src={client?.avatar} />
            <span>{client?.name}</span>
          </S.Logo>

          <S.Options>
            {pages.map((page) => {
              return (
                (page.permission === "all" || page.permission === info.user.permission) && (
                  <S.Option
                    key={page.name}
                    isSelected={path.pathname === page.path}
                    onClick={() => navigateTo(page.path)}
                  >
                    {page.icon}
                    {page.text}
                  </S.Option>
                )
              );
            })}
          </S.Options>
        </S.Container>
      )}
      {open && <S.Overlay onClick={() => setOpen((prev) => !prev)} />}
    </>
  );
}
