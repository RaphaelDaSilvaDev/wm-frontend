import { useEffect, useState } from "react";
import { Manager } from "../../../components/Manager";
import { Page } from "../../../components/Page";
import { ToolBar } from "../../../components/ToolBar";
import { EmployeHeader } from "./header";
import { EmployeRequest, EmployeToManager } from "./interfaces";
import { EmployeParse } from "./parse";
import { GetEmployeesService } from "./services";

import * as S from "./styles";

export function Employees() {
  const [data, setData] = useState<EmployeRequest[]>([]);
  const [dataToManaget, setDataToManager] = useState<EmployeToManager[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function getData() {
    setLoading(true);
    try {
      const response = await GetEmployeesService();
      setData(response);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setDataToManager(EmployeParse(data));
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Page>
      <S.Container>
        <ToolBar
          searchPlaceHolder="Pesquisar Funcionário"
          buttonText="Adicionar Funcionário"
          searchState={setSearch}
          buttonOnClick={() => {}}
        />
        <Manager body={dataToManaget} header={EmployeHeader} loading={loading} />
      </S.Container>
    </Page>
  );
}
