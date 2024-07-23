import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
