import Select from "react-select";
import styled, { css } from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Row = styled.div`
  width: 100%;

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

export const InputContent = styled.div`
  width: 100%;
  display: flex;
  gap: 0.8rem;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 53.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 2.4rem !important;
    height: 2.4rem !important;

    fill: ${(props) => props.theme.primary} !important;
  }
`;

export const InputSelect = styled(Select)`
  width: 100%;
  height: 5.6rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 4px;
  border: none;

  & > .react-select__control {
    height: 100%;
  }

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;
