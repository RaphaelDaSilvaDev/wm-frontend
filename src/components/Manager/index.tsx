import * as S from "./styles";

interface ManagerProps {
  header: string[];
  body: {
    plate: JSX.Element;
    model: JSX.Element;
    client: JSX.Element;
  }[];
  options?: JSX.Element;
}

export function Manager({ header, body, options }: ManagerProps) {
  return (
    <S.Container>
      <S.Table>
        <S.TableHead>
          {header.map((title) => (
            <S.TableHeadItem key={title}>{title}</S.TableHeadItem>
          ))}
          {options && <S.Option />}
        </S.TableHead>
        <S.TableBody>
          {body.map((element, index) => (
            <S.TableRow key={index}>
              {Object.values(element).map((e, index) => (
                <S.TableRowItem key={index}>{e}</S.TableRowItem>
              ))}
              {options && <S.Option>{options}</S.Option>}
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.Container>
  );
}
