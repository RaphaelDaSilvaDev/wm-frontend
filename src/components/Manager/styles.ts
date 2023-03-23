import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0 0 4px 4px;
  overflow: hidden;
`;

export const TableOverflow = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border-spacing: 0;

  table-layout: fixed;
  overflow-wrap: break-word;
`;

export const TableHead = styled.tr`
  width: 100%;
  min-width: 105rem;
  display: flex;
  align-items: center;

  padding-block: 2rem;
  padding-inline: 1.5rem;
  background-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

interface TableSize {
  tableSize: number;
}

export const TableHeadItem = styled.th<TableSize>`
  flex: ${(props) => props.tableSize};
  font-size: 1.8rem;
  font-weight: 800;
`;

export const TableBody = styled.div`
  width: 100%;
  min-width: 105rem;
  height: calc(100vh - 25rem);

  overflow-y: auto;
  overflow-x: hidden;
`;

export const TableRow = styled.tr`
  width: 100%;
  min-width: 105rem;
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

export const TableRowItem = styled.td<TableSize>`
  flex: ${(props) => props.tableSize};
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

export const Empty = styled.div`
  width: calc(100vw - 7.2rem - 5.2rem);
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
`;

export const ToolTip = styled.div`
  width: 3.2rem;
  cursor: pointer;
`;
