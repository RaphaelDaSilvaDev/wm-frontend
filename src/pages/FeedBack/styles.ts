import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 5.4rem;
  min-height: 5.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;

  border-bottom: 1px solid ${(props) => props.theme.border};

  background-color: ${(props) => props.theme.white};

  & > div {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  & > span {
    font-size: 2.4rem;
  }
`;

export const Body = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.2rem;
`;

export const Lines = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: center;
  justify-content: space-between;

  & > div {
    width: 98%;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 7.2rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  padding: 1.5rem 2rem;

  background-color: ${(props) => props.theme.white};
  border-top: 1px solid ${(props) => props.theme.border};
`;

export const ButtonSize = styled.div`
  width: 20rem;
`;
