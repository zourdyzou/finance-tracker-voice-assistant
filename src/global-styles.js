import { createGlobalStyle } from "styled-components";
import money from "./assets/money.png";

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    scroll-behavior: smooth;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) ,url(${money});
    background-size: cover;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #222222;
    transition: all .3s;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #444444;
  border-radius: 10px;
  }
  ::selection {
    background-color: red;
    color: white;
  }
  
  span {
    color: red;
  }
`;
