import styled from "styled-components";
import { Theme } from "../styles/Theme.ts";

export const Button = styled.button`
  width: 90px;
  height: 43px;
  padding: 8px 24px;
  background: ${Theme.colors.accent};
  text-decoration: none;
  border: none;
  border-radius: 8px;
  font-family:  ${Theme.fontFamily.tertiaryFontFamily};
  font-size: 18px;
  line-height: 150%;
  color: ${Theme.colors.primaryText};
  cursor: pointer;
  transition: ${Theme.animation.transition};

  &:hover{
    border: 1px solid ${Theme.colors.primaryBorder};
  }
`;
