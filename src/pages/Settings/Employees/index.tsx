import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Manager } from "../../../components/Manager";
import { Page } from "../../../components/Page";
import { ToolBar } from "../../../components/ToolBar";
import { EmployeHeader } from "./header";
import { EmployeRequest, EmployeToManager } from "./interfaces";
import { EmployeParse } from "./parse";
import { GetEmployeesService } from "./services";

import * as S from "./styles";

export function Employees() {
  const navigate = useNavigate();

  const [data, setData] = useState<EmployeRequest[]>([]);
  const [dataToManaget, setDataToManager] = useState<EmployeToManager[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function EditEmployee(id: string) {
    navigate("/settings/employees/create", { state: { id } });
  }

  function reload() {
    getData();
  }

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await GetEmployeesService(search);
      setData(response);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    setDataToManager(EmployeParse(data, EditEmployee, reload));
  }, [data]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Page>
      <S.Container>
        <ToolBar
          searchPlaceHolder="Pesquisar Funcionário"
          buttonText="Adicionar Funcionário"
          searchState={setSearch}
          buttonOnClick={() => navigate("/settings/employees/create")}
        />
        <Manager body={dataToManaget} header={EmployeHeader} loading={loading} />
      </S.Container>
    </Page>
  );
}
