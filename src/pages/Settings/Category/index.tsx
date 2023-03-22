import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Manager } from "../../../components/Manager";
import { Page } from "../../../components/Page";
import { ToastStyle } from "../../../components/Toast";
import { ToolBar } from "../../../components/ToolBar";
import { IDropDown } from "../../Home/interface";
import { CategoryHeader } from "./header";
import { ICategoryManager, ICategoryRequest } from "./interfaces";
import { parse } from "./parse";
import { GetCategoryService } from "./services";

import * as S from "./styles";

export function Category() {
  const navigate = useNavigate();
  const [data, setData] = useState<ICategoryRequest[]>([]);
  const [dataToManager, setDataToManager] = useState<ICategoryManager[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await GetCategoryService(search);
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

  function handleEditCategory(id: string) {
    navigate("/settings/categories/create", { state: { id } });
  }

  useEffect(() => {
    setDataToManager(parse(data, handleEditCategory));
  }, [data]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Page>
      <S.Container>
        <ToolBar
          buttonOnClick={() => navigate("/settings/categories/create")}
          buttonText="Adicionar Categoria"
          searchPlaceHolder="Pesquisar Categoria"
          searchState={setSearch}
        />
        <Manager header={CategoryHeader} body={dataToManager} loading={loading} />
      </S.Container>
    </Page>
  );
}
