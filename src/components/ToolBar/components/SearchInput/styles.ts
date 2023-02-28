import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 0 1.5rem 2rem;

  outline: none;
  box-shadow: none;
  border: none;
  border-left: 1px solid ${(props) => props.theme.border};

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }

  :focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Icon = styled.div`
  width: 2.4rem;
  height: 100%;

  margin-right: 2rem;

  outline: none;
  border: none;
  box-shadow: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
