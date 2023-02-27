import { useEffect, useState } from "react";

import { header } from "./header";

import { Page } from "../../components/Page";
import { Manager } from "../../components/Manager";
import { getAllServices, toggleStatus } from "./services";
import { IDropDown, IManagerShow, IServiceRequest } from "./interface";
import { Parse } from "./parser";
import { ManagerModal } from "./components/Modal";
import { ToolBar } from "../../components/ToolBar";

export function Home() {
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
        rules: [item.status_value === "pending"],
      },
      {
        element: <span>Mover para Em Andamento</span>,
        onClick: async () => {
          await toggleStatus(item.id, "working");
          reload();
        },
        rules: [item.status_value === "working"],
      },
      {
        element: <span>Mover para Finalizado</span>,
        onClick: async () => {
          await toggleStatus(item.id, "finished");
          reload();
        },
        rules: [item.status_value === "finished"],
      },
      {
        element: <span>Mover para Entregue</span>,
        onClick: async () => {
          await toggleStatus(item.id, "delivered");
          reload();
        },
        rules: [item.status_value === "delivered"],
      },
      {
        element: <span>Gerenciar Serviço</span>,
        onClick: () => {
          setModal(<ManagerModal setModalOpen={setModal} id={item.id} reload={reload} />);
        },
        divider: true,
        rules: [],
      },
    ];
  };

  async function loadData() {
    setLoading(true);
    try {
      const request = await getAllServices();
      setServicesRequest(request);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function reload() {
    loadData();
  }

  useEffect(() => {
    setServicesManager(Parse(servicesRequest));
  }, [servicesRequest]);

  useEffect(() => {
    loadData();
  }, []);

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
