import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Manager } from "../../components/Manager";
import { Page } from "../../components/Page";
import { ToastStyle } from "../../components/Toast";
import { ToolBar } from "../../components/ToolBar";
import { IDropDown } from "../Home/interface";
import { headerUsers } from "./header";
import { IClientRequest, IManagerShowClient } from "./interfaces";

import { ParseUsers } from "./parser";
import { getAllClients } from "./services";

export function Client() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const [usersRequest, setUsersRequest] = useState<IClientRequest[]>([]);
  const [usersManager, setUsersManager] = useState<IManagerShowClient[]>([]);

  const [modal, setModal] = useState<JSX.Element>(<></>);

  function handleEditClient(itemId: string) {
    navigate("/clients/create", { state: { id: itemId } });
  }

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const request = await getAllClients(search);
      setUsersRequest(request);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading(false);
    }
  }, [search]);

  function reload() {
    loadData();
  }

  useEffect(() => {
    setUsersManager(ParseUsers(usersRequest, handleEditClient));
  }, [usersRequest]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Page>
      <ToolBar
        buttonText="Adicionar Usuário"
        buttonOnClick={() => navigate("/clients/create")}
        searchPlaceHolder="Pesquisar Usuário"
        searchState={setSearch}
      />
      <Manager header={headerUsers} body={usersManager} loading={loading} />
      {modal}
    </Page>
  );
}
