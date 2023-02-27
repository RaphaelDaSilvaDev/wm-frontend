export interface IModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<JSX.Element>>;
  title: string;
  content: string | JSX.Element;
  confirmButtonText: string;
}
