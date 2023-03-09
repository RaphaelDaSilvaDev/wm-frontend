import { useCallback, useContext, useEffect, useState } from "react";

import { header } from "./header";

import { Page } from "../../components/Page";
import { Manager } from "../../components/Manager";
import { getAllServices, toggleStatus } from "./services";
import { IDropDown, IManagerShow, IServiceRequest } from "./interface";
import { Parse } from "./parser";
import { ManagerModal } from "./components/Modal";
import { ToolBar } from "../../components/ToolBar";
import { AuthUserContext } from "../../services/authUserContext";
import axios from "axios";
import { ToastStyle } from "../../components/Toast";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigation = useNavigate();
  const { info } = useContext(AuthUserContext);
  const [modal, setModal] = useState<JSX.Element>(<></>);
  const [loading, setLoading] = useState<boolean>(true);

  const [servicesRequest, setServicesRequest] = useState<IServiceRequest[]>([]);
  const [servicesManager, setServicesManager] = useState<IManagerShow[]>([]);

  const [search, setSearch] = useState<string>("");

  const items = (item: IManagerShow): IDropDown[] => {
    return [
      {
        element: <span>Gerenciar Serviço</span>,
        onClick: () => {
          navigation("/service", { state: { id: item.id } });
        },
        rules: [item.responsible_id !== info.user.id && info.user.permission !== "master"],
      },
    ];
  };

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const request = await getAllServices(search);
      setServicesRequest(request);
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
    setServicesManager(Parse(servicesRequest, reload));
  }, [servicesRequest]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Page>
      <ToolBar
        buttonText="Adicionar Serviço"
        buttonOnClick={() => navigation("/service")}
        searchPlaceHolder="Pesquisar Serviço"
        searchState={setSearch}
      />
      <Manager header={header} body={servicesManager} options={items} loading={loading} />
      {modal}
    </Page>
  );
}
