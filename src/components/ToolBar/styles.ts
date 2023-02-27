import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-inline: 1px solid ${(props) => props.theme.border};
  border-top: 1px solid ${(props) => props.theme.border};
  border-radius: 4px 4px 0 0;

  background-color: ${(props) => props.theme.white};

  overflow: hidden;

  & > button {
    max-width: 25rem;
    border-radius: 0px;
  }
`;

export const FilterContent = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;
