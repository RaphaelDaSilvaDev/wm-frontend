import { IDropDown } from "../../pages/Home/interface";
import { TooltipProps } from "../ToolTip/interfaces";

export interface ManagerProps {
  header: IHeaderManagerProps[];
  body: {}[];
  options: (item: any) => IDropDown[];
  loading?: boolean;
}

export interface IHeaderManagerProps {
  title: string;
  key: string;
}
