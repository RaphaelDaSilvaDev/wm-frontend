import Tippy from "@tippyjs/react";
import styled from "styled-components";

export const TippyContent = styled(Tippy)`
  width: 19.8rem !important;
  transition-duration: 200ms;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  .tippy-content {
    padding: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
`;

export const Item = styled.div`
  width: 100%;
  max-width: 19.8rem !important;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 2rem;

  cursor: pointer;

  & > span {
    color: ${(props) => props.theme.textPrimary};
  }

  :hover {
    background-color: ${(props) => props.theme.background};
    transition: background-color 175ms;
  }
`;
