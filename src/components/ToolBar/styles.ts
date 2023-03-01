import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  border-inline: 1px solid ${(props) => props.theme.border};
  border-top: 1px solid ${(props) => props.theme.border};
  border-radius: 4px 4px 0 0;

  background-color: ${(props) => props.theme.white};

  & > button {
    max-width: 25rem;
    border-radius: 0px;

    @media screen and (max-width: 630px) {
      max-width: 100%;
    }
  }
`;

export const FilterContent = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  align-items: center;
  align-self: flex-end;
  @media screen and (max-width: 630px) {
    max-width: 100%;
  }
`;
