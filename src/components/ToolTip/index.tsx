import { DotsThreeVertical } from "phosphor-react";
import * as S from "./styles";

interface TooltipProps {
  items: JSX.Element[];
}

export function ToolTip({ items }: TooltipProps) {
  return (
    <S.TippyContent
      content={
        <>
          {items.map((item, index) => (
            <S.Item key={index}>
              <span>{item}</span>
            </S.Item>
          ))}
        </>
      }
      placement="left"
      duration={[200, 200]}
      arrow={false}
      allowHTML
      trigger="click"
      interactive={true}
    >
      <DotsThreeVertical />
    </S.TippyContent>
  );
}
