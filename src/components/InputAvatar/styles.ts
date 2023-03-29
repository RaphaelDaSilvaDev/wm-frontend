import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;
  & > button {
    display: none !important;
  }
  & > label {
    width: fit-content;
    cursor: pointer;
    font-size: 2rem;
    color: ${(props) => props.theme.textPrimary};
  }
`;

export const NoImage = styled.label`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 100%;
  align-self: center;
  background-color: ${(props) => props.theme.background};
`;

export const Image = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 100%;
  align-self: center;
  background-color: ${(props) => props.theme.background};
`;

export const GroupInfoImage = styled.label`
  width: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  & > input[type="file"] {
    display: none;
  }
  & > img {
    width: 6.4rem;
    height: 6.4rem;
    align-self: center;
    border-radius: 50%;
    object-fit: cover;
  }
`;
