import styled from "styled-components";

interface BulletProps {
  color: string;
}

export const Bullet = styled.span<BulletProps>`
  position: relative;
  padding-left: 2.5rem;

  :before {
    content: "";
    width: 1.8rem;
    height: 1.8rem;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 0.8rem);
    left: 0;
  }
`;
