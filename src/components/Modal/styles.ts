import styled, { css } from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 7.2rem;

  background-color: ${(props) => props.theme.primary};

  padding: 1.5rem 2rem;

  display: flex;
  align-items: center;

  & > span {
    font-size: 1.8rem;
    color: ${(props) => props.theme.white};
  }

  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
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

interface ButtonProps {
  styleBnt: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.primary};

  cursor: pointer;

  ${(props) =>
    props.styleBnt === "primary"
      ? css`
          background-color: ${props.theme.primary};
          color: ${props.theme.white};

          :hover {
            background-color: ${props.theme.primaryDark};
            transition: background-color 175ms;
          }
        `
      : css`
          background-color: ${props.theme.white};
          color: ${props.theme.primary};

          :hover {
            background-color: ${props.theme.background};
            transition: background-color 175ms;
          }
        `}

  & > span {
    font-size: 1.8rem;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 2.4rem !important;
    height: 2.4rem !important;

    fill: ${(props) => props.theme.primary} !important;
  }
`;
