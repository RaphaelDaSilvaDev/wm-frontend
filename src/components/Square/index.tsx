import * as S from "./styles";

interface BulletProps {
  color?: string;
  content?: string | number;
  icon?: JSX.Element;
}

export function Square({ color, content, icon }: BulletProps) {
  return (
    <S.Content>
      <S.Square color={color || "gray"}>{icon}</S.Square>
    </S.Content>
  );
}
