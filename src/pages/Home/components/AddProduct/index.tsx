import axios from "axios";
import { useEffect, useState } from "react";
import { Manager } from "../../../../components/Manager";
import { Modal } from "../../../../components/Modal";
import { ToastStyle } from "../../../../components/Toast";
import { ToolBar } from "../../../../components/ToolBar";
import { GetProductsService } from "../../../Product/services";
import { IServiceProductToManager } from "../CreateService/interfaces";
import { AddProductHeader } from "./header";
import { IProductsRequest, ProductToManager } from "./interface";
import { AddParse, ProductParse } from "./parse";

import * as S from "./styles";

interface IManagerModalProps {
  id?: string;
  setModalOpen: React.Dispatch<React.SetStateAction<JSX.Element>>;
  setServiceProduct: React.Dispatch<React.SetStateAction<IServiceProductToManager[]>>;
  serviceProductToManager: IServiceProductToManager[];
  reload?: () => void;
}

export function AddProduct({
  id,
  reload,
  setModalOpen,
  setServiceProduct,
  serviceProductToManager,
}: IManagerModalProps) {
  const [data, setData] = useState<IProductsRequest[]>([]);
  const [dataToManager, setDataToManager] = useState<ProductToManager[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await GetProductsService();
      setData(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading(false);
    }
  };

  function handleSubmit() {
    event?.preventDefault();

    const addItens = dataToManager.filter(
      (item) => item.amount !== 0 && item.amount !== undefined && item.amount !== null
    );

    const parsed = AddParse(addItens, handleRemoveProduct);

    setServiceProduct(parsed);
    setModalOpen(<></>);
  }

  function handleRemoveProduct(productId: string) {
    setServiceProduct((prev) => [...prev.filter((product) => product.id !== productId)]);
  }

  useEffect(() => {
    const serviceProductToManagerStorage = Array.from(serviceProductToManager);
    const dataStorage = Array.from(data);

    dataStorage.map((data) =>
      serviceProductToManagerStorage.map((manager) => {
        if (manager.id === data.id) {
          data.amount === undefined || data.amount === null
            ? (data.amount = manager.amount)
            : (data.amount = data.amount);
          return data;
        } else {
          return data;
        }
      })
    );
    setDataToManager(ProductParse(dataStorage, setData));
  }, [data, search]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Modal
      setModalOpen={setModalOpen}
      title="Adicionar Produto"
      confirmButtonText="Adicionar"
      content={
        <S.Content>
          <ToolBar searchState={setSearch} searchPlaceHolder="Pesquisar Produto" />
          <S.Form id="formModal" onSubmit={handleSubmit}>
            <Manager
              header={AddProductHeader}
              body={dataToManager.filter((item) =>
                search
                  ? item.name.props.children.toLowerCase().includes(search.toLowerCase())
                  : item
              )}
              loading={loading}
            />
          </S.Form>
        </S.Content>
      }
    />
  );
}
