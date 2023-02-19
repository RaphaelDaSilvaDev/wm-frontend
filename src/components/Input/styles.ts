import styled, { css } from "styled-components";

interface hasError {
  hasError: boolean;
}

export const Input = styled.input<hasError>`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: none;

  ${(props) =>
    props.hasError &&
    css`
      box-shadow: 0 0 0 2px ${(props) => props.theme.danger};
    `}

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;
