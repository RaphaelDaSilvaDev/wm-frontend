export interface MultiOptionsProps {
  page: {
    name: string;
    icon: JSX.Element;
    text: JSX.Element;
    path: string;
    permission: string;
    options: {
      name: string;
      path: string;
      icon: JSX.Element;
      text: JSX.Element;
      permission: string;
    }[];
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
