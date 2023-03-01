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

  padding: 2rem;

  background: url(${Banner}) no-repeat center / cover;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  position: relative;
`;

export const LogoContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  z-index: 999;

  & > img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 100%;
    object-fit: cover;

    background-color: white;
  }

  & > span {
    color: ${(props) => props.theme.white};
    font-size: 4.8rem;
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

export const Footer = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;

  display: block;
  visibility: visible;

  bottom: 0;

  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;
