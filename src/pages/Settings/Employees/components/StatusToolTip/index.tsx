import { DotsThreeVertical } from "phosphor-react";
import { hideAll } from "tippy.js";

import * as S from "./styles";
import "tippy.js/dist/tippy.css";
import { IDropDown } from "../../../../Home/interface";

interface StatusToolTipProps {
  items: (item: any) => IDropDown[];
  status: {
    color: string;
    icon: JSX.Element;
  };
}

export function StatusToolTip({ items, status }: StatusToolTipProps) {
  return (
    <S.TippyContent
      className="tooltip"
      content={
        <>
          {items([]).map((item, i) => {
            return item.divider ? (
              <>
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
              </>
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
      offset={[0, 0]}
      duration={[0, 0]}
      arrow={false}
      allowHTML
      trigger="click"
      interactive={true}
      ignoreAttributes={true}
    >
      <S.SquareContent>
        <S.Square color={status.color || "gray"}>{status.icon}</S.Square>
      </S.SquareContent>
    </S.TippyContent>
  );
}
