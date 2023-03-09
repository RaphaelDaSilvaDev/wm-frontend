import styled from "styled-components";

interface BulletProps {
  color: string;
}

export const Content = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 2.5rem;

  cursor: pointer;
`;

export const Square = styled.div<BulletProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.color};
`;
