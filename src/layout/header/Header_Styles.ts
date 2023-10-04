import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

interface HeaderPropsStyled {
  scrollBackground: string
}

const Header = styled.header<HeaderPropsStyled>`
  margin-bottom: 55px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props:HeaderPropsStyled) => props.scrollBackground};
  transition: background-color 2s ease;
  z-index: 1000;
  opacity: 0.9;
`;

export const S = {
  Header,
};
