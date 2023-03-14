import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Manager } from "../../components/Manager";
import { Page } from "../../components/Page";
import { ToolBar } from "../../components/ToolBar";
import { IDropDown } from "../Home/interface";
import { vehicleHeader } from "./header";
import { IVehicleRequest, IVehicleToManager } from "./interfaces";
import { VehicleParse } from "./parse";
import { GetVehicleServie } from "./services";

export function Vehicles() {
  const navigate = useNavigate();
  const [data, setData] = useState<IVehicleRequest[]>([]);
  const [dataToManager, setDataToManaget] = useState<IVehicleToManager[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function getData() {
    setLoading(true);
    try {
      const response = await GetVehicleServie();
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const options = (item: any): IDropDown[] => [
    {
      element: <></>,
      onClick: () => {},
      rules: [],
    },
  ];

  useEffect(() => {
    setDataToManaget(VehicleParse(data));
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Page>
      <ToolBar
        buttonOnClick={() => navigate("/vehicles/create")}
        buttonText="Adicionar Veículo"
        searchPlaceHolder="Pesquisar Veículo"
        searchState={setSearch}
      />
      <Manager loading={loading} header={vehicleHeader} body={dataToManager} options={options} />
    </Page>
  );
}
