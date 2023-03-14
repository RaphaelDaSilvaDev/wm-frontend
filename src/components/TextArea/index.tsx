import { useFormContext } from "react-hook-form";
import * as S from "./styles";

export interface InputProps {
  placeholder: string;
  registerText: string;
  hasError: boolean;
  label?: string;
  disabled?: boolean;
}

export function TextArea({
  hasError,
  placeholder,
  registerText,
  label,
  disabled = false,
}: InputProps) {
  const { register } = useFormContext();
  return (
    <S.Row>
      {label && <label htmlFor={registerText}>{label}</label>}
      <S.Input
        id={registerText}
        hasError={hasError}
        placeholder={placeholder}
        {...register(registerText)}
        disabled={disabled}
      />
    </S.Row>
  );
}
