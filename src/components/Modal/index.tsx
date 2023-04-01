import ReactModal from "react-modal";
import { IModalProps } from "./interface";

import * as S from "./styles";

export function Modal({
  setModalOpen,
  content,
  title,
  confirmButtonText,
  hasCancelButton,
  isForm = true,
  reload,
}: IModalProps) {
  return (
    <ReactModal
      isOpen={true}
      contentLabel="Label Example"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <S.Header>
        <span>{title}</span>
      </S.Header>
      <S.Content>{content}</S.Content>
      <S.Footer>
        {hasCancelButton !== false && (
          <S.Button styleBnt="secondary" onClick={() => setModalOpen(<></>)}>
            <span>Cancelar</span>
          </S.Button>
        )}
        {isForm ? (
          <S.Button type="submit" form="formModal" styleBnt="primary">
            <span>{confirmButtonText}</span>
          </S.Button>
        ) : (
          <S.Button
            type="button"
            styleBnt="primary"
            onClick={() => {
              reload();
              setModalOpen(<></>);
            }}
          >
            <span>{confirmButtonText}</span>
          </S.Button>
        )}
      </S.Footer>
    </ReactModal>
  );
}
