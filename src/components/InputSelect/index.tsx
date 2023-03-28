import * as S from "./styles";

interface InputSelectProps {
  options: {
    value: string;
    label: string;
    status?: string;
  }[];
  setValue: React.Dispatch<React.SetStateAction<any>>;
  value: any;
  placeHolder: string;
  label?: string;
  disabled?: boolean;
}

export function InputSelect({
  setValue,
  options,
  value,
  label,
  placeHolder,
  disabled = false,
}: InputSelectProps) {
  return (
    <S.Row>
      {label && <label htmlFor={label}>{label}</label>}
      <S.InputSelect
        id={label}
        className="react-select-container"
        classNamePrefix="react-select"
        options={options}
        isClearable={false}
        placeholder={placeHolder}
        onChange={(e) => setValue(e)}
        value={value ? value : null}
        menuPosition="absolute"
        isDisabled={disabled}
      />
    </S.Row>
  );
}
