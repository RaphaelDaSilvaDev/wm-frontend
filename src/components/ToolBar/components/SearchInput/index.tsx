import * as S from "./styles";

interface SearchInputProps {
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchInput({ placeholder, onChange }: SearchInputProps) {
  return <S.Input placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />;
}
