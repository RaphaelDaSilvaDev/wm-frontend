import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 5.4rem;
  min-height: 5.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;

  border-bottom: 1px solid ${(props) => props.theme.border};

  background-color: ${(props) => props.theme.white};

  & > span {
    font-size: 2.4rem;
  }

  & > div {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const Body = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-bottom: 2rem;

  overflow-y: auto;

  padding: 1.2rem;
`;

export const LinesWithSpace = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: center;
  justify-content: space-between;

  & > div {
    width: 98%;
  }
`;

export const Lines = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: center;
  justify-content: space-between;
`;

export const Values = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
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

export const ButtonSize = styled.div`
  width: 20rem;
`;

interface ButtonProps {
  styleBnt: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.primary};

  cursor: pointer;

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

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

export const Row = styled.div`
  width: 100%;
  max-height: 50rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > label {
    width: fit-content;
    cursor: pointer;
    font-size: 2rem;
    color: ${(props) => props.theme.textPrimary};
  }
`;

export const InputDate = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }

  :disabled {
    opacity: 0.6;
  }
`;

export const ProductManager = styled.div`
  width: 100%;
  height: min-content;
  max-height: 50rem;

  & > * > table > div > div {
    height: 100% !important;
  }
`;

export const ToolTip = styled.div`
  width: 3.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  & > div {
    width: 2.4rem !important;
    height: 2.4rem !important;

    fill: ${(props) => props.theme.primary} !important;
  }
`;
