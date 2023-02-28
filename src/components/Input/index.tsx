import { useFormContext } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import * as S from "./styles";

export interface InputProps {
  type?: string;
  placeholder: string;
  registerText: string;
  hasError: boolean;
  disabled?: boolean;
  mask?: string | (string | RegExp)[];
}

export function Input({
  hasError,
  placeholder,
  registerText,
  type = "text",
  disabled = false,
  mask,
}: InputProps) {
  const { register, watch } = useFormContext();
  const text = watch(registerText);
  return mask === undefined ? (
    <S.Input
      id={registerText}
      hasError={hasError}
      type={type}
      step="any"
      disabled={disabled}
      placeholder={placeholder}
      {...register(registerText, { valueAsNumber: type === "number" ? true : false })}
    />
  ) : (
    <S.MaskInput
      id={registerText}
      mask={mask}
      hasError={hasError}
      value={text ? text.toUpperCase() : ""}
      type={type}
      step="any"
      disabled={disabled}
      placeholder={placeholder}
      {...register(registerText, { valueAsNumber: type === "number" ? true : false })}
    />
  );
}
