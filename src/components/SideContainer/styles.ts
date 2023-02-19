import styled from "styled-components";

import Banner from "../../assets/banner.png";

export const Base = styled.div`
  width: 50vw;
  height: 100vh;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${Banner}) no-repeat center / cover;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  max-width: 80%;
  max-height: 80vh;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    max-height: 60vh;
  }
`;

export const ArrowDown = styled.div`
  position: absolute;
  bottom: 2rem;
  display: none;

  & > a > svg {
    color: ${(props) => props.theme.border};
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
