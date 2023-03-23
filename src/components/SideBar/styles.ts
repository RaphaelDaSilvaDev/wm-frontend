import styled, { css } from "styled-components";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.open ? "20rem" : "7.2rem")};
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;

  left: 0;
  top: 0;

  background-color: ${(props) => props.theme.primary};
  z-index: 999;
  transition: width 175ms;

  div > div > span {
    transition: all 175ms;
    position: absolute;
    left: 6rem;
    display: ${(props) => (props.open ? "block" : "none")};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  position: relative;

  left: 0;
  top: 0;

  z-index: 999;
  transition: width 175ms;
`;

export const Logo = styled.div`
  width: 100%;
  height: 7.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 2rem;

  cursor: pointer;

  & > img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 100%;
  }

  & > span {
    color: ${(props) => props.theme.white};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

interface OptionProps {
  isSelected: boolean;
}

export const Option = styled.div<OptionProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 2rem;
  cursor: pointer;

  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.isSelected && props.theme.primaryDark};

  :hover {
    background-color: ${(props) => props.theme.primaryDark};
  }

  & > svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;
  background-color: #00000060;

  transition: all 175ms;

  z-index: 998;
`;

export const Version = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  bottom: 2rem;

  & > span {
    color: white;
    font-size: 1.2rem;
  }
`;
