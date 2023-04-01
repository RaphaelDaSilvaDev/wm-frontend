import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const LoadingContainer = styled.div`
  width: 39.25rem;
  height: 49rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 2.4rem !important;
    height: 2.4rem !important;

    fill: ${(props) => props.theme.primary} !important;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > strong {
    font-size: 1.4rem;
  }
`;

export const InputContainer = styled.div`
  max-width: 25rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: none;

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;

export const Button = styled.button`
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: none;

  cursor: pointer;

  background-color: ${(props) => props.theme.white};
  color: #000;

  :hover {
    background-color: ${(props) => props.theme.background};
    transition: background-color 175ms;
  }

  & > span {
    font-size: 1.8rem;
  }
`;
