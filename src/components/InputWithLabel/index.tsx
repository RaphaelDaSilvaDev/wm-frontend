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
  label?: string;
  min?: number | string;
  max?: number | string;
}

export function InputLabel({
  hasError,
  placeholder,
  registerText,
  type = "text",
  disabled = false,
  mask,
  label,
  min,
  max,
}: InputProps) {
  const { register, watch } = useFormContext();
  const text = watch(registerText);
  return mask === undefined ? (
    <S.Row>
      {label && <label htmlFor={registerText}>{label}</label>}
      <S.Input
        id={registerText}
        hasError={hasError}
        type={type}
        step="any"
        disabled={disabled}
        placeholder={placeholder}
        min={min}
        max={max}
        {...register(registerText, { valueAsNumber: type === "number" ? true : false })}
      />
    </S.Row>
  ) : (
    <S.Row>
      {label && <label htmlFor={registerText}>{label}</label>}
      <S.MaskInput
        id={registerText}
        mask={mask}
        hasError={hasError}
        value={text ? text.toUpperCase() : ""}
        type={type}
        step="any"
        disabled={disabled}
        placeholder={placeholder}
        min={min}
        max={max}
        {...register(registerText, { valueAsNumber: type === "number" ? true : false })}
      />
    </S.Row>
  );
}
