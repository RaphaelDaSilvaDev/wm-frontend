import { useFormContext } from "react-hook-form";
import * as S from "./styles";

export interface InputProps {
  type?: string;
  placeholder: string;
  registerText: string;
  hasError: boolean;
  disabled?: boolean;
}

export function Input({
  hasError,
  placeholder,
  registerText,
  type = "text",
  disabled = false,
}: InputProps) {
  const { register } = useFormContext();

  return (
    <S.Input
      id={registerText}
      hasError={hasError}
      type={type}
      step="any"
      disabled={disabled}
      placeholder={placeholder}
      {...register(registerText, { valueAsNumber: type === "number" ? true : false })}
    />
  );
}
