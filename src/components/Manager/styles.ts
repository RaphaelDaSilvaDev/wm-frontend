import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0 0 4px 4px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border-spacing: 0;
`;

export const TableHead = styled.tr`
  width: 100%;

  display: flex;
  align-items: center;

  padding-block: 2rem;
  padding-inline: 1.5rem;
  background-color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const TableHeadItem = styled.th`
  flex: 1;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const TableBody = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: auto;
`;

export const TableRow = styled.tr`
  width: 100%;

  overflow-y: auto;

  display: flex;
  align-items: center;

  padding-block: 2rem;
  padding-inline: 1.5rem;
  background-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.border};

  :nth-child(odd) {
    background-color: ${(props) => props.theme.white};
  }
`;

export const TableRowItem = styled.td`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.div`
  width: 3.2rem;
  cursor: pointer;
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
