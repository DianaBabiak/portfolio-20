import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/common.ts";

const SectionTitle = styled.h2`
  position: relative;

  ${font({
    family: Theme.fontFamily.secondaryFontFamily,
    lineHeight: '150%',
    fontMin:35,
    fontMax: 48
  })}

  &::before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 4px;
    background-color: ${Theme.colors.accent};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
  }
`;


export const S = {
    SectionTitle
}