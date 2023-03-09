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
            {options && <S.Option />}
            {header.map((item) => (
              <S.TableHeadItem key={item.title}>{item.title}</S.TableHeadItem>
            ))}
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
              body.map((elements, index) => (
                <S.TableRow key={index}>
                  {options && (
                    <S.ToolTip>
                      <ToolTip items={options} elements={elements} />
                    </S.ToolTip>
                  )}
                  {Object.entries(elements).map((element) =>
                    header.map(
                      (item) =>
                        element[0] === item.key && (
                          <S.TableRowItem key={item.key}>{element[1]}</S.TableRowItem>
                        )
                    )
                  )}
                </S.TableRow>
              ))
            )}
          </S.TableBody>
        </S.TableOverflow>
      </S.Table>
    </S.Container>
  );
}
