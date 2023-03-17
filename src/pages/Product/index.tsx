import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Manager } from "../../components/Manager";
import { Page } from "../../components/Page";
import { ToastStyle } from "../../components/Toast";
import { ToolBar } from "../../components/ToolBar";
import { IDropDown } from "../Home/interface";
import { productsHeader } from "./header";
import { IProductsRequest, ProductToManager } from "./interfaces";
import { ProductParse } from "./parse";
import { GetProductsService } from "./services";

export function Product() {
  const navigate = useNavigate();
  const [data, setData] = useState<IProductsRequest[]>([]);
  const [dataToManager, setDataToManager] = useState<ProductToManager[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const options = (item: any): IDropDown[] => [
    {
      element: <span>Alterar Quantidade</span>,
      onClick: () => {},
      rules: [],
    },
    {
      element: <span>Editar Produto</span>,
      onClick: () => {},
      rules: [],
      divider: true,
    },
  ];

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await GetProductsService(search);
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

  useEffect(() => {
    setDataToManager(ProductParse(data));
  }, [data]);

  function reload() {
    getData();
  }

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Page>
      <ToolBar
        buttonText="Adicionar Produto"
        buttonOnClick={() => navigate("/products/create")}
        searchPlaceHolder="Pesquisar Produto"
        searchState={setSearch}
      />
      <Manager header={productsHeader} body={dataToManager} options={options} loading={loading} />
    </Page>
  );
}
