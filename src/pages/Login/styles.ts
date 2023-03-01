import styled, { css } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  background-color: ${(props) => props.theme.white};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    padding-block: 12rem;
  }
`;

export const Content = styled.form`
  width: 100%;
  max-width: 48rem;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  gap: 3.8rem;
  padding: 2rem;

  border: 1px solid ${(props) => props.theme.border};

  & > h1 {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 1140px) {
    padding: 2rem;
    max-width: 38rem;
  }
`;

export const InputContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > label {
    font-size: 2rem;
    color: ${(props) => props.theme.textPrimary};
  }
`;

export const Error = styled.span`
  color: red;
  align-self: center;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 2.4rem !important;
    height: 2.4rem !important;

    fill: ${(props) => props.theme.primary} !important;
  }
`;

export const Footer = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;

  display: none;
  visibility: hidden;

  bottom: 0;

  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
    visibility: visible;
  }
`;
