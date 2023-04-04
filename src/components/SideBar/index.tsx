import { useContext, useEffect, useState } from "react";
import { Users, Wrench } from "phosphor-react";

import * as S from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { pages } from "../../utils/pages";
import { AuthUserContext } from "../../services/authUserContext";
import { useCookies } from "react-cookie";
import { IClientRequest } from "../../pages/Login/interfaces";
import { MultipleOptions } from "./components/MultipleOptions";

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

  const name = client?.name
    .split(" ")
    .map((item) => item.charAt(0))
    .reduce((acc, value) => (acc += value));

  return (
    <>
      {info && info.user && (
        <S.Container open={open}>
          <S.Content>
            <S.Logo onClick={() => setOpen((prev) => !prev)}>
              {client?.avatar ? (
                <img src={client?.avatar ? client.avatar : ""} />
              ) : (
                <strong>{name}</strong>
              )}
              <span>{client?.name}</span>
            </S.Logo>

            <S.Options>
              {pages.map((page) => {
                return (page.permission === "all" || page.permission === info.user.permission) &&
                  page.options === undefined ? (
                  <S.Option
                    key={page.name}
                    isSelected={path.pathname.includes(page.path)}
                    onClick={() => navigateTo(page.path)}
                  >
                    {page.icon}
                    {page.text}
                  </S.Option>
                ) : (
                  page.options && (
                    <MultipleOptions
                      key={page.name}
                      page={page}
                      isOpen={open}
                      setIsOpen={setOpen}
                    />
                  )
                );
              })}
            </S.Options>
          </S.Content>
          <S.Version>
            <span>v-0.4.5</span>
          </S.Version>
        </S.Container>
      )}
      {open && <S.Overlay onClick={() => setOpen((prev) => !prev)} />}
    </>
  );
}
