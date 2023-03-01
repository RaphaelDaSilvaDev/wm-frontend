import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CaretDown } from "phosphor-react";

import { AuthToken } from "../../services/authToken";
import { AuthUserContext } from "../../services/authUserContext";
import * as S from "./styles";
import { pages } from "../../utils/pages";
import { ManagerUserModal } from "./components/UserModal";

export function Header() {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const { info, handleSignOut } = useContext(AuthUserContext);

  const [modal, setModal] = useState<JSX.Element>(<></>);
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
        <S.TippyContent
          className="tooltip"
          placement="bottom-end"
          duration={[0, 0]}
          arrow={false}
          allowHTML
          trigger="click"
          interactive={true}
          ignoreAttributes={true}
          content={
            <>
              <S.Item
                onClick={() => {
                  setModal(
                    <ManagerUserModal setModalOpen={setModal} user={info.user} token={info.token} />
                  );
                }}
              >
                <span>Meus Dados</span>
              </S.Item>
              <S.Item onClick={handleSignOut}>
                <span>Sair</span>
              </S.Item>
            </>
          }
        >
          <S.UserInfo>
            <span>{info?.user?.name}</span>
            <CaretDown size={22} />
          </S.UserInfo>
        </S.TippyContent>
      </S.Content>
      {modal}
    </S.Container>
  );
}
