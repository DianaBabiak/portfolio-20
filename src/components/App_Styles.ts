import styled from "styled-components";
import { Theme } from "../styles/Theme.ts";

const AppContainer = styled.div`
  width: 100%;
`;

const PositionContainer = styled.div`
   max-width: 1230px;
   position: relative;
   margin: 0 auto;
  
  @media ${Theme.media.tablet} {
    margin: 0 auto 55px;
  }
`;

export const S = {
  AppContainer,
  PositionContainer,
};
