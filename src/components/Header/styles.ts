import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 7.2rem);
  display: flex;
  align-items: center;
  height: 7.2rem;

  padding: 2.5rem;
  align-self: flex-end;

  background-color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.border};

  z-index: 997;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-size: 2.4rem;
    color: ${(props) => props.theme.primary};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  cursor: pointer;
`;
