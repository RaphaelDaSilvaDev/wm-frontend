import { Page } from "../../components/Page";
import { BasicData } from "./components/BasicData";
import { Category } from "./components/Category";

import * as S from "./styles";

export function Settings() {
  return (
    <Page>
      <S.Container>
        <S.Content>
          <BasicData />
          <Category />
        </S.Content>
      </S.Container>
    </Page>
  );
}
