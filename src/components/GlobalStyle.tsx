import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #000;
  color: #fff;
  position: relative;
`;

export const MainContent = styled.main`
  width: 100%;
  text-align: center;
  flex: 1;
`;
export default GlobalStyle;
