import { useContext, useState } from "react";
import { Users, Wrench } from "phosphor-react";

import * as S from "./styles";
import Logo from "../../assets/pepsi.png";
import { useLocation, useNavigate } from "react-router-dom";
import { pages } from "../../utils/pages";
import { AuthUserContext } from "../../services/authUserContext";

export function SideBar() {
  const { info } = useContext(AuthUserContext);
  const path = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  function navigateTo(path: string) {
    navigate(path);
    setOpen(false);
  }

  return (
    <>
      {info && info.user && (
        <S.Container open={open}>
          <S.Logo onClick={() => setOpen((prev) => !prev)}>
            <img src={Logo} />
            <span>Pepsi</span>
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
