import * as S from "./styles";

interface BulletProps {
  color?: string;
  content?: string | number;
}

export function Bullet({ color, content }: BulletProps) {
  return <S.Bullet color={color || "gray"}>{content || "-"}</S.Bullet>;
}
