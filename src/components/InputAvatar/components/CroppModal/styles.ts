import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Close = styled(Dialog.Close)`
  padding: 0.8rem;
  background-color: ${(props) => props.theme.danger};
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.danger};
    transition: background-color 175ms;
  }
`;

export const Content = styled(Dialog.Content)`
  min-height: 32rem;
  border-radius: 8px;
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  background-color: ${(props) => props.theme.background};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Cropper = styled.div`
  width: 500px;
  max-height: 500px;
  @media screen and (max-width: 625px) {
    width: 250px;
  }
  .cropper-crop-box,
  .cropper-view-box {
    border-radius: 50%;
  }
  .cropper-view-box {
    box-shadow: 0 0 0 1px #39f;
    outline: 0;
  }
`;
