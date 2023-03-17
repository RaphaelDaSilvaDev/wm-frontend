import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Manager } from "../../components/Manager";
import { Page } from "../../components/Page";
import { ToastStyle } from "../../components/Toast";
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

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await GetVehicleServie(search);
      setData(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading(false);
    }
  }, [search]);

  function handleEditVehicle(itemId: string) {
    navigate("/vehicles/create", { state: { id: itemId } });
  }

  useEffect(() => {
    setDataToManaget(VehicleParse(data, handleEditVehicle));
  }, [data]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Page>
      <ToolBar
        buttonOnClick={() => navigate("/vehicles/create")}
        buttonText="Adicionar Veículo"
        searchPlaceHolder="Pesquisar Veículo"
        searchState={setSearch}
      />
      <Manager loading={loading} header={vehicleHeader} body={dataToManager} />
    </Page>
  );
}
