import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import * as S from "./styles";

interface SearchInputProps {
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchInput({ placeholder, onChange }: SearchInputProps) {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [showIcon, setShowIcon] = useState<boolean>(false);

  useEffect(() => {
    if (inputSearch.length === 0) {
      onChange("");
    }
  }, [inputSearch]);

  return (
    <>
      <S.Input
        placeholder={placeholder}
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onChange(inputSearch);
            setShowIcon(true);
          }
        }}
      />
      <S.Icon
        onClick={() => {
          if (showIcon) {
            setInputSearch("");
            onChange("");
            setShowIcon(false);
          }
        }}
      >
        {showIcon && inputSearch.length > 0 && <X />}
      </S.Icon>
    </>
  );
}
