import styled from "styled-components";

interface OptionProps {
  isSelected: boolean;
}

export const Option = styled.div<OptionProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 2rem;
  cursor: pointer;

  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.isSelected && props.theme.primaryDark};

  :hover {
    background-color: ${(props) => props.theme.primaryDark};
  }

  & > svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

interface ContainerProps {
  open: boolean;
  quantity: number;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionContainet = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => (props.open ? 8.4 * props.quantity + "rem" : "0rem")};
  display: flex;
  flex-direction: column;

  overflow: hidden;
  transition: height 175ms;
`;

export const SubOption = styled.div<OptionProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 2rem;
  cursor: pointer;

  color: ${(props) => props.theme.background};
  font-size: 1.6rem;

  background-color: ${(props) =>
    props.isSelected ? props.theme.primaryDark : props.theme.textTransparent};

  :hover {
    background-color: ${(props) => props.theme.primaryDark};
  }

  & > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

interface ContainerProps {
  open: boolean;
  quantity: number;
}
