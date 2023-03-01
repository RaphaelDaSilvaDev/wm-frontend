import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  & > h1 {
    font-size: 22rem;
    font-weight: bold;
  }
  & > h2 {
    font-size: 1.8rem;
  }
`;

export const BackToHome = styled.button`
  width: 40%;
  height: 5.6rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  border-radius: 8px;
  border: 0;
  outline: 0;
  :hover {
    background-color: ${(props) => props.theme.primaryDark};
    transition: background-color 175ms;
  }
`;
