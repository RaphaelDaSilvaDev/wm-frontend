import { DotsThreeVertical } from "phosphor-react";
import { hideAll } from "tippy.js";

import { TooltipProps } from "./interfaces";
import * as S from "./styles";

export function ToolTip({ items }: TooltipProps) {
  return (
    <S.TippyContent
      className="tooltip"
      content={
        <>
          {items.map((item, index) => {
            return item.divider ? (
              <>
                <S.Divider />
                <S.Item
                  key={index}
                  onClick={() => {
                    item.onClick();
                    hideAll();
                  }}
                >
                  {item.element}
                </S.Item>
              </>
            ) : (
              <S.Item
                key={index}
                onClick={() => {
                  item.onClick();
                  hideAll();
                }}
              >
                {item.element}
              </S.Item>
            );
          })}
        </>
      }
      placement="left"
      duration={[200, 200]}
      arrow={false}
      allowHTML
      trigger="focus"
      interactive={true}
      ignoreAttributes={true}
    >
      <DotsThreeVertical />
    </S.TippyContent>
  );
}
