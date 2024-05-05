import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";


const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${Theme.colors.accent};
  transition: background-color 2s ease;
  z-index: 1000;
  opacity: 0.9;
`;

export const S = {
  Header,
};
