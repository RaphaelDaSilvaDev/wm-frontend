import Select from "react-select";
import styled from "styled-components";

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

export const InputSelect = styled(Select)`
  width: 100%;
  height: 5.6rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 4px;
  border: none;
  & > .react-select__control {
    height: 100%;
    overflow-y: auto;

    .react-select__input {
      :focus {
        box-shadow: none;
      }
    }
  }

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;
