import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import { header } from "./header";

import { Page } from "../../components/Page";
import { Manager } from "../../components/Manager";
import { ToolTip } from "../../components/ToolTip";
import { Modal } from "../../components/Modal";
import { getAllServices } from "./services";
import { IManagerShow, IServiceRequest } from "./interface";
import { Parse } from "./parser";

export function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [servicesRequest, setServicesRequest] = useState<IServiceRequest[]>([]);
  const [servicesManager, setServicesManager] = useState<IManagerShow[]>([]);

  const items = [
    {
      element: <span>AAA</span>,
      onClick: () => setModalOpen(true),
    },
    {
      element: <span>BBB</span>,
      onClick: () => setModalOpen(true),
    },
    {
      element: <span>CCC</span>,
      onClick: () => setModalOpen(true),
      divider: true,
    },
  ];

  const options = <ToolTip items={items} />;

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

  useEffect(() => {
    setServicesManager(Parse(servicesRequest));
  }, [servicesRequest]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Page>
      {loading ? (
        <ReactLoading type="spin" color="#000" />
      ) : (
        <>
          <Manager header={header} body={servicesManager} options={options} />
          <Modal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            title="Adicionar Serviço"
            content="Serviço"
          />
        </>
      )}
    </Page>
  );
}
