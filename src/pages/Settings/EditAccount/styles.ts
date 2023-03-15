import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 7.2rem - 2.4rem - 2.4rem);

  overflow-y: auto;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
