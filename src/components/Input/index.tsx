import { useFormContext } from "react-hook-form";
import * as S from "./styles";

export interface InputProps {
  type?: string;
  placeholder: string;
  registerText: string;
  hasError: boolean;
}

export function Input({ hasError, placeholder, registerText, type = "text" }: InputProps) {
  const { register } = useFormContext();

  return (
    <S.Input
      hasError={hasError}
      type={type}
      placeholder={placeholder}
      {...register(registerText)}
    />
  );
}
