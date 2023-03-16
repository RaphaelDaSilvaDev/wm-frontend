import axios from "axios";
import { useEffect, useState } from "react";
import { Manager } from "../../../../components/Manager";
import { Page } from "../../../../components/Page";
import { ToastStyle } from "../../../../components/Toast";
import { ToolBar } from "../../../../components/ToolBar";
import { IDropDown } from "../../../Home/interface";
import { CategoryHeader } from "./header";
import { ICategoryRequest } from "./interfaces";
import { GetCategoryService } from "./services";

import * as S from "./styles";

export function Category() {
  const [data, setData] = useState<ICategoryRequest[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const options = (item: string): IDropDown[] => [
    {
      element: <></>,
      onClick: () => {},
      rules: [],
    },
    {
      element: <></>,
      onClick: () => {},
      rules: [],
    },
  ];

  async function getData() {
    setLoading(true);
    try {
      const response = await GetCategoryService();
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Container>
      <ToolBar
        buttonOnClick={() => {}}
        buttonText="Adicionar Categoria"
        searchPlaceHolder="Pesquisar Categoria"
        searchState={setSearch}
      />
      <Manager header={CategoryHeader} options={options} body={data} loading={loading} />
    </S.Container>
  );
}
