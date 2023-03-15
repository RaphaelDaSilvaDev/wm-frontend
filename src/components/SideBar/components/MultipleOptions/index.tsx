import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MultiOptionsProps } from "./interface";
import * as S from "./styles";

export function MultipleOptions({ page, isOpen, setIsOpen }: MultiOptionsProps) {
  const path = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  function navigateTo(path: string) {
    navigate(path);
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen === false) {
      setOpen(false);
    }
  }, [isOpen]);

  return (
    <S.Container>
      <S.Option
        key={page.name}
        isSelected={path.pathname === page.name}
        onClick={() => {
          setOpen((prev) => !prev);
          setIsOpen(true);
        }}
      >
        {page.icon}
        {page.text}
      </S.Option>
      <S.OptionContainet open={open} quantity={page.options.length}>
        {page.options.map((option) => (
          <S.SubOption
            key={option.name}
            isSelected={path.pathname === page.name}
            onClick={() => navigateTo(option.path)}
          >
            {option.icon}
            {option.name}
          </S.SubOption>
        ))}
      </S.OptionContainet>
    </S.Container>
  );
}
