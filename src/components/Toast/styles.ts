import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    font-size: 2rem;
  }
`;

export const Button = styled.div`
  cursor: pointer;
`;
