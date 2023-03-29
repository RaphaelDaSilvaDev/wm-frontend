import { X } from "@phosphor-icons/react";
import { Portal, Root, Trigger } from "@radix-ui/react-dialog";
import { useRef, useState } from "react";
import { Cropper } from "react-cropper";
import { Button } from "../../../Button";
import "cropperjs/dist/cropper.css";
import * as S from "./styles";

interface CropModalProps {
  setCropModal: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
  setUpdateAvatar: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<File | undefined>>;
  updateAvatar: string;
}

export function CroppModal({
  setAvatar,
  setCropModal,
  setUpdateAvatar,
  updateAvatar,
}: CropModalProps) {
  const cropperRef = useRef<HTMLImageElement>(null);

  const [croppedImg, setCroppedImg] = useState("");

  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    setCroppedImg(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <Root open>
      <Trigger />
      <Portal>
        <S.Overlay />
        <S.Content>
          <S.Close onClick={() => setCropModal(null)}>
            <X color="#f5f5f5" />
          </S.Close>

          <S.Cropper>
            <Cropper
              src={updateAvatar}
              style={{ height: "100%", width: "100%" }}
              // Cropper.js options
              initialAspectRatio={1 / 1}
              guides={false}
              autoCropArea={1}
              aspectRatio={1 / 1}
              crop={onCrop}
              ref={cropperRef}
            />
          </S.Cropper>

          <Button
            text="Salvar"
            type="button"
            loading={false}
            onClick={() => {
              setUpdateAvatar(croppedImg);
              fetch(croppedImg)
                .then((res) => res.blob())
                .then((blob) => {
                  const file = new File([blob], "File name", { type: "image/png" });
                  setAvatar(file);
                });
              setCropModal(null);
            }}
          />
        </S.Content>
      </Portal>
    </Root>
  );
}
