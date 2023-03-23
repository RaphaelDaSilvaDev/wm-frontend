import { DotsThreeVertical } from "phosphor-react";
import { hideAll } from "tippy.js";

import { TooltipProps } from "./interfaces";
import * as S from "./styles";
import "tippy.js/dist/tippy.css";

export function ToolTip({ items, elements }: TooltipProps) {
  return (
    <S.TippyContent
      className="tooltip"
      content={
        <>
          {items(elements).map((item, i) => {
            return item.divider ? (
              <div key={i}>
                <S.Divider />
                <S.Item
                  disabled={item.rules.some((rule) => rule === true)}
                  key={i}
                  onClick={() => {
                    item.onClick();
                    hideAll();
                  }}
                >
                  {item.element}
                </S.Item>
              </div>
            ) : (
              <S.Item
                disabled={item.rules.some((rule) => rule === true)}
                key={i}
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
      duration={[0, 0]}
      arrow={false}
      allowHTML
      trigger="click"
      interactive={true}
      ignoreAttributes={true}
    >
      <DotsThreeVertical />
    </S.TippyContent>
  );
}
