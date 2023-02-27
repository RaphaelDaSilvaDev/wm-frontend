import { useFormContext } from "react-hook-form";
import * as S from "./styles";

export interface InputProps {
  placeholder: string;
  registerText: string;
  hasError: boolean;
}

export function TextArea({ hasError, placeholder, registerText }: InputProps) {
  const { register } = useFormContext();
  return (
    <S.Input
      id={registerText}
      hasError={hasError}
      placeholder={placeholder}
      {...register(registerText)}
    />
  );
}
