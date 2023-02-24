import ReactModal from "react-modal";

import * as S from "./styles";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string | JSX.Element;
}

export function Modal({ modalOpen, setModalOpen, content, title }: ModalProps) {
  return (
    <ReactModal
      isOpen={modalOpen}
      contentLabel="Label Example"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <S.Header>
        <span>{title}</span>
      </S.Header>
      <S.Content>{content}</S.Content>
      <S.Footer>
        <S.Button styleBnt="secondary" onClick={() => setModalOpen(false)}>
          <span>Cancelar</span>
        </S.Button>
        <S.Button styleBnt="primary" onClick={() => setModalOpen(false)}>
          <span>Adicionar</span>
        </S.Button>
      </S.Footer>
    </ReactModal>
  );
}
