import styled from "styled-components";
import { Theme } from "../../../styles/Theme.ts";
import { font } from "../../../styles/common.ts";

const LogoTitle = styled.span`
  margin-right: 10px;

  ${font({
    family: Theme.fontFamily.quinaryFontFamily,
    lineHeight: "180%",
    fontMin: 14,
    fontMax: 18,
  })}
`;

export const S = {
  LogoTitle,
};
