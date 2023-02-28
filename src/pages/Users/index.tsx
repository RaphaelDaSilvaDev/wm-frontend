import { useCallback, useEffect, useState } from "react";
import { Manager } from "../../components/Manager";
import { Page } from "../../components/Page";
import { ToolBar } from "../../components/ToolBar";
import { IDropDown } from "../Home/interface";
import { ManagerUserModal } from "./components/UserModal";
import { headerUsers } from "./header";
import { IManagerShowUser, IUsersRequest } from "./interfaces";
import { ParseUsers } from "./parser";
import { getAllUsers, toogleUserStatus } from "./services";

export function Users() {
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const [usersRequest, setUsersRequest] = useState<IUsersRequest[]>([]);
  const [usersManager, setUsersManager] = useState<IManagerShowUser[]>([]);

  const [modal, setModal] = useState<JSX.Element>(<></>);

  const items = (item: IManagerShowUser): IDropDown[] => {
    return [
      {
        element: <span>Ativar usuário</span>,
        onClick: async () => {
          await toogleUserStatus(item.id);
          reload();
        },
        rules: [item.status_value === true],
      },
      {
        element: <span>Inativar usuário</span>,
        onClick: async () => {
          await toogleUserStatus(item.id);
          reload();
        },
        rules: [item.status_value === false],
      },
      {
        element: <span>Gerenciar usuário</span>,
        onClick: async () => {
          setModal(<ManagerUserModal reload={reload} setModalOpen={setModal} id={item.id} />);
        },
        rules: [],
        divider: true,
      },
    ];
  };

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const request = await getAllUsers(search);
      setUsersRequest(request);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  function reload() {
    loadData();
  }

  useEffect(() => {
    setUsersManager(ParseUsers(usersRequest));
  }, [usersRequest]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Page>
      <ToolBar
        buttonText="Adicionar Usuário"
        buttonOnClick={() => {
          setModal(<ManagerUserModal reload={reload} setModalOpen={setModal} />);
        }}
        searchPlaceHolder="Pesquisar Usuário"
        searchState={setSearch}
      />
      <Manager header={headerUsers} body={usersManager} loading={loading} options={items} />
      {modal}
    </Page>
  );
}
