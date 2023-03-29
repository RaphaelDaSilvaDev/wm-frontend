import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { IClientRequest } from "../../pages/Login/interfaces";
import { ToastStyle } from "../Toast";
import { CroppModal } from "./components/CroppModal";
import * as S from "./styles";

interface InputFileProps {
  setAvatar: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export function InputAvatar({ setAvatar }: InputFileProps) {
  const [cookies] = useCookies(["client"]);
  const [client, setClient] = useState<IClientRequest>();
  const [updateAvatar, setUpdateAvatar] = useState<string>("");
  const [cropModal, setCropModal] = useState<JSX.Element | null>(null);

  function handleFile({ target }: React.ChangeEvent<HTMLInputElement>) {
    const file = target && target.files && target.files[0];
    if (file && file.size < 1048576) {
      setCropModal(
        <CroppModal
          setCropModal={setCropModal}
          setUpdateAvatar={setUpdateAvatar}
          setAvatar={setAvatar}
          updateAvatar={URL.createObjectURL(file)}
        />
      );
    } else {
      ToastStyle({ message: "Imagem maior que 1MB", styleToast: "warning" });
    }
  }

  useEffect(() => {
    setClient(cookies.client);
  }, [cookies]);

  const name = client?.name
    .split(" ")
    .map((item) => item.charAt(0))
    .reduce((acc, value) => (acc += value));

  return (
    <S.Container>
      <label htmlFor="UserImage">
        <span>Atualizar foto</span>
      </label>

      {client?.avatar && !updateAvatar ? (
        <S.GroupInfoImage htmlFor="image-upload">
          <img src={client.avatar} />
          <input id="image-upload" accept="image/*" type="file" onChange={(e) => handleFile(e)} />
        </S.GroupInfoImage>
      ) : updateAvatar ? (
        <S.GroupInfoImage htmlFor="image-upload">
          <img src={updateAvatar} />
          <input id="image-upload" accept="image/*" type="file" onChange={(e) => handleFile(e)} />
        </S.GroupInfoImage>
      ) : (
        <S.GroupInfoImage htmlFor="image-upload">
          <strong>{name}</strong>
          <input id="image-upload" accept="image/*" type="file" onChange={(e) => handleFile(e)} />
        </S.GroupInfoImage>
      )}
      {cropModal}
    </S.Container>
  );
}
