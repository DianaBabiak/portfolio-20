import { Theme } from "./Theme.ts";

interface FontPropsType {
  family?: string;
  color?: string;
  weight?: number;
  lineHeight?: string;
  fontMin?: number;
  fontMax?: number;
  style?: string;
}

export const font = ({
  family,
  color,
  weight,
  lineHeight,
  fontMax,
  fontMin,
  style,
}: FontPropsType) => `
font-family:${family ?? Theme.fontFamily.primaryFontFamily};
color: ${color ?? Theme.colors.primaryText};
font-weight: ${weight ?? 700};
line-height:${lineHeight ?? 1.2};
font-size: calc( (100vw - 300px)/(1230 - 300) * (${fontMax} - ${fontMin}) + ${fontMin}px);
font-style: ${style ?? "normal"};



`;
