import { Modal } from "../../../../components/Modal";
import { IModalProps } from "../../../../components/Modal/interface";

import * as S from "./styles";

export function AlterQuantityProductModal({
  confirmButtonText,
  content,
  setModalOpen,
  title,
}: IModalProps) {
  return (
    <S.Container>
      <Modal
        confirmButtonText={confirmButtonText}
        setModalOpen={setModalOpen}
        title={title}
        content={content}
      />
    </S.Container>
  );
}
