import styled from "styled-components";

export const Button = styled.button`
  align-self: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-size: 1.8rem;

  padding: 1.5rem 2rem;

  border-radius: 4px;
  border: none;
  outline: none;

  & > div {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    & > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.primaryDark};

    transition: background-color 125ms;
  }

  :disabled {
    background-color: ${(props) => props.theme.border};
    cursor: not-allowed;
  }
`;
