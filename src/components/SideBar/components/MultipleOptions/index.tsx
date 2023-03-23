import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../../../services/authUserContext";
import { MultiOptionsProps } from "./interface";
import * as S from "./styles";

export function MultipleOptions({ page, isOpen, setIsOpen }: MultiOptionsProps) {
  const path = useLocation();
  const navigate = useNavigate();

  const { info } = useContext(AuthUserContext);

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
        isSelected={path.pathname.includes(page.path)}
        onClick={() => {
          setOpen((prev) => !prev);
          setIsOpen(true);
        }}
      >
        {page.icon}
        {page.text}
      </S.Option>
      <S.OptionContainet open={open} quantity={page.options.length}>
        {page.options.map((option) => {
          return (
            (option.permission === "all" || option.permission === info.user.permission) && (
              <S.SubOption
                key={option.name}
                isSelected={path.pathname.includes(option.path)}
                onClick={() => navigateTo(option.path)}
              >
                {option.icon}
                {option.name}
              </S.SubOption>
            )
          );
        })}
      </S.OptionContainet>
    </S.Container>
  );
}
