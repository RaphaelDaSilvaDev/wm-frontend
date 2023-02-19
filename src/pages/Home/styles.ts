import styled, { css } from "styled-components";

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.8rem;

  background-color: #fcfeff;
  border-radius: 25px;

  padding: 15.9rem 15.9rem;

  @media screen and (max-width: 768px) {
    padding: 8rem 8rem;
  }

  @media screen and (max-width: 560px) {
    padding: 2rem 2rem;
  }
`;
