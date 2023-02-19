import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.primary};
  border: 0px none #ffffff;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.primaryDark};
}
::-webkit-scrollbar-thumb:active {
  background: ${(props) => props.theme.primaryDark};
}
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.border};
  border: 0px none #ffffff;
  border-radius: 3px;
}
::-webkit-scrollbar-track:hover {
  background:${(props) => props.theme.border};
}
::-webkit-scrollbar-track:active {
  background:${(props) => props.theme.border};
}
::-webkit-scrollbar-corner {
  background: transparent;
}
  
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
  }
  
  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textPrimary};
  }

  body, input-security, textarea, button, input{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
  }

  h1, h2, h3, h4, h5,h6{
    font-family: 'Lato', sans-serif;
    color: ${(props) => props.theme.textPrimary};
  }
`;
