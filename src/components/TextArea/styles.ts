import styled, { css } from "styled-components";

interface hasError {
  hasError: boolean;
}

export const Input = styled.textarea<hasError>`
  width: 100%;
  height: 10rem;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: none;
  resize: none;

  ${(props) =>
    props.hasError &&
    css`
      box-shadow: 0 0 0 2px ${(props) => props.theme.danger};
    `}

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;
