import styled, { css } from "styled-components";
import { Theme } from "../../styles/Theme.ts";

interface ButtonLinkPropsType {
  label: string;
  link: string;
  type: "primary" | "outline";
  size: "medium" | "large"
}

export const ButtonLink = ({label, link, type, size }: ButtonLinkPropsType) => {
  return (
    <StyledButtonLink type={type} href={link} size={size}>
      {label}
    </StyledButtonLink>
  );
};

const StyledButtonLink = styled.a`
  background-color: ${Theme.colors.accent};
  height: 43px;
  display: inline-block;
  padding: 8px 24px;
  font-family:  ${Theme.fontFamily.tertiaryFontFamily};
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: ${Theme.colors.primaryText};

  ${(props) =>
    props.type === "primary" &&
    css<ButtonLinkPropsType>`
      border: none;
      &:hover{
        border: 1px solid ${Theme.colors.primaryBorder};
      }
    `}

  ${(props) =>
    props.type === "outline" &&
    css<ButtonLinkPropsType>`
      border: 1px solid;
      background: transparent;

      &:hover{
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
