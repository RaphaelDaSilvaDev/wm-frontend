import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { InputLabel } from "../../components/InputWithLabel";
import { Manager } from "../../components/Manager";
import { Modal } from "../../components/Modal";
import { Page } from "../../components/Page";
import { ToastStyle } from "../../components/Toast";
import { ToolBar } from "../../components/ToolBar";
import { IDropDown } from "../Home/interface";
import { AlterQuantityProductContent } from "./components/AlterQuantityProductContent";
import { AlterQuantityProductModal } from "./components/AlterQuantityProductModal";
import { productsHeader } from "./header";
import { IProductsRequest, ProductToManager } from "./interfaces";
import { ProductParse } from "./parse";
import { GetProductsService } from "./services";
import * as S from "./styles";

export function Product() {
  const navigate = useNavigate();
  const [data, setData] = useState<IProductsRequest[]>([]);
  const [dataToManager, setDataToManager] = useState<ProductToManager[]>([]);
  const [search, setSearch] = useState<string>("");
  const [alterQuantityProductModal, setAlterQuantityProductModal] = useState<JSX.Element>(<></>);
  const [loading, setLoading] = useState<boolean>(true);

  const options = (item: any): IDropDown[] => [
    {
      element: <span>Alterar Quantidade</span>,
      onClick: () =>
        setAlterQuantityProductModal(
          <AlterQuantityProductModal
            confirmButtonText="Alterar"
            setModalOpen={setAlterQuantityProductModal}
            title={`Alterar quantidade de ${item.name.props.children}`}
            content={
              <AlterQuantityProductContent
                quantity={item.quantity.props.children}
                id={item.id}
                setModalOpen={setAlterQuantityProductModal}
                reload={reload}
              />
            }
          />
        ),
      rules: [],
    },
    {
      element: <span>Editar Produto</span>,
      onClick: () => {
        navigate("/products/create", { state: { id: item.id } });
      },
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
      {alterQuantityProductModal}
    </Page>
  );
}
