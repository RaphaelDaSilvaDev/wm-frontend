import styled from "styled-components";

export const ToolTip = styled.div`
  width: 3.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SquareContent = styled.span`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
`;

interface BulletProps {
  color: string;
}

export const Square = styled.div<BulletProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.color};
`;

export const ModalContainer = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  position: fixed;
`;
