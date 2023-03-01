import Tippy from "@tippyjs/react";
import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 7.2rem);
  display: flex;
  align-items: center;
  height: 7.2rem;

  padding: 2.5rem;
  align-self: flex-end;

  background-color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.border};

  z-index: 997;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-size: 2.4rem;
    color: ${(props) => props.theme.primary};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  user-select: none;

  cursor: pointer;

  & > span {
    font-size: 2.4rem;
    color: ${(props) => props.theme.textPrimary};
  }
`;

export const TippyContent = styled(Tippy)`
  width: 26rem !important;
  transition-duration: 200ms;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  .tippy-content {
    padding: 0;
  }
`;

export const Item = styled.button`
  width: 100%;
  max-width: 26rem !important;

  background-color: ${(props) => props.theme.white};

  box-shadow: none;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 0.8rem;

  cursor: pointer;

  :focus {
    box-shadow: none;
    outline: none;
    border: none;
  }

  & > span {
    color: ${(props) => props.theme.textPrimary};
  }

  :hover:not(:disabled) {
    background-color: ${(props) => props.theme.background};
    transition: background-color 175ms;
  }

  :disabled {
    opacity: 0.8;
    cursor: not-allowed;
    & > span {
      opacity: 0.6;
    }
  }
`;

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.border};
  border: none;
`;
