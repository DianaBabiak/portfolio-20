import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme.ts";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${Theme.fontFamily.primaryFontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${Theme.colors.primaryBg};
    color: ${Theme.colors.primaryText};
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

ul{
  list-style: none;
}

a{
  text-decoration: none;
}

button{
  border:none;
  background-color: unset;
}


`;
