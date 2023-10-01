import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme.ts";



interface ButtonLinkPropsType {
    type: "primary" | "outline";
    size: "medium" | "large"
}


const ButtonLink = styled.a <ButtonLinkPropsType>`
  background-color: ${Theme.colors.accent};
  height: 43px;
  display: inline-block;
  padding: 7px 23px;
  font-family: ${Theme.fontFamily.tertiaryFontFamily};
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: ${Theme.colors.primaryText};
  border: 1px solid ${Theme.colors.accent}
  transition: ${Theme.animation.transition};

  ${(props) =>
          props.type === "primary" &&
          css<ButtonLinkPropsType>`
           

            &:hover {
              border: 1px solid ${Theme.colors.primaryBorder};
            }
          `}

  ${(props) =>
          props.type === "outline" &&
          css<ButtonLinkPropsType>`
            border: 1px solid;
            background: transparent;

            &:hover {
              border: 1px solid ${Theme.colors.accent};
            }
          `}

  ${(props) =>
          props.size === "medium" &&
          css<ButtonLinkPropsType>`
            border-radius: 8px;
            width: 115px;
            font-size: 18px;
          `}

  ${(props) =>
          props.size === "large" &&
          css<ButtonLinkPropsType>`
            border-radius: 24px;
            width: 150px;
            font-size: 17px;

          `}
`;


export const S = {
    ButtonLink

}