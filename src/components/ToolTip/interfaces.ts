export interface TooltipProps {
  items: {
    element: JSX.Element;
    onClick: () => void;
    divider?: boolean;
  }[];
}
