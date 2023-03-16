import styled from "styled-components";

interface DateStyleProps {
  color: string;
}

export const DataStyle = styled.div<DateStyleProps>`
  padding: 0.5rem;

  border-radius: 4px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.white};
`;

export const ToolTip = styled.div`
  width: 3.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
