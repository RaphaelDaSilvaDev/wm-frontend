import axios from "axios";
import { useEffect, useState } from "react";
import { Manager } from "../../../../components/Manager";
import { Modal } from "../../../../components/Modal";
import { ToastStyle } from "../../../../components/Toast";
import { ToolBar } from "../../../../components/ToolBar";
import { GetProductsService } from "../../../Product/services";
import { IServiceProductRequest, IServiceProductToManager } from "../CreateService/interfaces";
import { AddProductHeader } from "./header";
import { IProductsRequest, ProductToManager } from "./interface";
import { AddParse, ProductParse } from "./parse";

import * as S from "./styles";

interface IManagerModalProps {
  id?: string;
  setModalOpen: React.Dispatch<React.SetStateAction<JSX.Element>>;
  setServiceProduct: React.Dispatch<React.SetStateAction<IServiceProductToManager[]>>;
  reload?: () => void;
}

export function AddProduct({ id, reload, setModalOpen, setServiceProduct }: IManagerModalProps) {
  const [data, setData] = useState<IProductsRequest[]>([]);
  const [dataToManager, setDataToManager] = useState<ProductToManager[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  async function getData() {
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
  }

  function handleSubmit() {
    event?.preventDefault();
    const addItens = dataToManager.filter((item) => item.amount !== 0);
    console.log(addItens);
    const parsed = AddParse(addItens);
    console.log(parsed);
    setServiceProduct((prev) => [...prev, ...parsed]);
    setModalOpen(<></>);
  }

  useEffect(() => {
    setDataToManager(ProductParse(data));
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Modal
      setModalOpen={setModalOpen}
      title="Adicionar Produto"
      confirmButtonText="Adicionar"
      content={
        <S.Form id="formModal" onSubmit={handleSubmit}>
          <ToolBar searchState={setSearch} searchPlaceHolder="Pesquisar Produto" />
          <Manager header={AddProductHeader} body={dataToManager} loading={loading} />
        </S.Form>
      }
    />
  );
}
