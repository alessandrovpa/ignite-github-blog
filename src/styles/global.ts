import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }
  body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialised;
  }
  body, input, textarea, button{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  button:hover{
    transition: 0.2s;
    cursor:pointer;
  }
  a{
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`;
