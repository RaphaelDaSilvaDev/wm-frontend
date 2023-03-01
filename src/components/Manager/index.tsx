import { ToolTip } from "../ToolTip";
import { ManagerProps } from "./interfaces";
import ReactLoading from "react-loading";
import * as S from "./styles";

export function Manager({ header, body, options, loading }: ManagerProps) {
  return (
    <S.Container>
      <S.Table>
        <S.TableOverflow>
          <S.TableHead>
            {header.map((item) => (
              <S.TableHeadItem key={item.title}>{item.title}</S.TableHeadItem>
            ))}
            {options && <S.Option />}
          </S.TableHead>
          <S.TableBody>
            {loading ? (
              <S.LoadingContainer>
                <ReactLoading type="spin" />
              </S.LoadingContainer>
            ) : body.length === 0 ? (
              <S.Empty>
                <span>Nenhum registro encontrado</span>
              </S.Empty>
            ) : (
              body.map((elements) => (
                <S.TableRow>
                  {Object.entries(elements).map((element) =>
                    header.map(
                      (item) =>
                        element[0] === item.key && <S.TableRowItem>{element[1]}</S.TableRowItem>
                    )
                  )}
                  {options && <ToolTip items={options} elements={elements} />}
                </S.TableRow>
              ))
            )}
          </S.TableBody>
        </S.TableOverflow>
      </S.Table>
    </S.Container>
  );
}
