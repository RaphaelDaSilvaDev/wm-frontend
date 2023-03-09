import ReactInputMask from "react-input-mask";
import styled, { css } from "styled-components";

interface hasError {
  hasError: boolean;
}

export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > label {
    width: fit-content;
    cursor: pointer;
    font-size: 2rem;
    color: ${(props) => props.theme.textPrimary};
  }
`;

export const Input = styled.input<hasError>`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};

  ${(props) =>
    props.hasError &&
    css`
      box-shadow: 0 0 0 2px ${(props) => props.theme.danger};
    `}

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;

export const MaskInput = styled(ReactInputMask)<hasError>`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};

  ${(props) =>
    props.hasError &&
    css`
      box-shadow: 0 0 0 2px ${(props) => props.theme.danger};
    `}

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;
