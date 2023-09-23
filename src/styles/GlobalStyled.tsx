import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.ts";

export const GlobalStyled = createGlobalStyle`

  *,
  *::before,
  *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body {
    font-family: 'Nunito',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-gray,${Theme.colors.primaryBg});
    color: ${Theme.colors.primaryText};
    /*max-width: 1440px;*/
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



`