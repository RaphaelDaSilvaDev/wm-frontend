import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;

  outline: none;
  box-shadow: none;
  border: none;
  border-inline: 1px solid ${(props) => props.theme.border};

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;
