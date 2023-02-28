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

export function Home() {
  const { info } = useContext(AuthUserContext);
  const [modal, setModal] = useState<JSX.Element>(<></>);
  const [loading, setLoading] = useState<boolean>(true);

  const [servicesRequest, setServicesRequest] = useState<IServiceRequest[]>([]);
  const [servicesManager, setServicesManager] = useState<IManagerShow[]>([]);

  const [search, setSearch] = useState<string>("");

  const items = (item: IManagerShow): IDropDown[] => {
    return [
      {
        element: <span>Mover para Pendente</span>,
        onClick: async () => {
          await toggleStatus(item.id, "pending");
          reload();
        },
        rules: [
          item.status_value === "pending",
          item.responsible_id !== info.user.id && info.user.permission !== "master",
        ],
      },
      {
        element: <span>Mover para Em Andamento</span>,
        onClick: async () => {
          await toggleStatus(item.id, "working");
          reload();
        },
        rules: [
          item.status_value === "working",
          item.responsible_id !== info.user.id && info.user.permission !== "master",
        ],
      },
      {
        element: <span>Mover para Finalizado</span>,
        onClick: async () => {
          await toggleStatus(item.id, "finished");
          reload();
        },
        rules: [
          item.status_value === "finished",
          item.responsible_id !== info.user.id && info.user.permission !== "master",
        ],
      },
      {
        element: <span>Mover para Entregue</span>,
        onClick: async () => {
          await toggleStatus(item.id, "delivered");
          reload();
        },
        rules: [
          item.status_value === "delivered",
          item.responsible_id !== info.user.id && info.user.permission !== "master",
        ],
      },
      {
        element: <span>Gerenciar Serviço</span>,
        onClick: () => {
          setModal(<ManagerModal setModalOpen={setModal} id={item.id} reload={reload} />);
        },
        divider: true,
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  function reload() {
    loadData();
  }

  useEffect(() => {
    setServicesManager(Parse(servicesRequest));
  }, [servicesRequest]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Page>
      <ToolBar
        buttonText="Adicionar Serviço"
        buttonOnClick={() => setModal(<ManagerModal setModalOpen={setModal} reload={reload} />)}
        searchPlaceHolder="Pesquisar Serviço"
        searchState={setSearch}
      />
      <Manager header={header} body={servicesManager} options={items} loading={loading} />
      {modal}
    </Page>
  );
}
