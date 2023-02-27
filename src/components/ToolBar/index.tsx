import { Button } from "../Button";
import { Input } from "../Input";
import { SearchInput } from "./components/SearchInput";
import * as S from "./styles";

interface ToolBarProps {
  buttonOnClick: () => void;
  buttonText: string;
  searchPlaceHolder: string;
  searchState: React.Dispatch<React.SetStateAction<string>>;
}

export function ToolBar({
  buttonOnClick,
  searchPlaceHolder,
  searchState,
  buttonText,
}: ToolBarProps) {
  return (
    <S.Container>
      <Button text={buttonText} loading={false} onClick={buttonOnClick} />
      <S.FilterContent>
        <SearchInput onChange={searchState} placeholder={searchPlaceHolder} />
      </S.FilterContent>
    </S.Container>
  );
}
