import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ToolTip = styled.div`
  width: 3.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;
