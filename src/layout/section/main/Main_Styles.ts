import styled from "styled-components";
import { Theme } from "../../../styles/Theme.ts";
import { font } from "../../../styles/common.ts";

const MainWrapper = styled.div`
  max-width: 40%;

  @media ${Theme.media.tablet} {
    max-width: 100%;
  }
`;

const MainTitle = styled.h1`
  color: ${Theme.colors.accent};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  align-self: stretch;
  margin-bottom: 5px;

  p {
    display: none;
  }

  @media ${Theme.media.additional}{
    color: ${Theme.colors.secondaryText};
  }

  @media ${Theme.media.tablet} {
    text-align: center;
  }
`;

const Title = styled.span`
  font-style: normal;
  @media ${Theme.media.tablet} {
    text-align: center;
  }

  @media ${Theme.media.desktop} {
    font-size:64px ;
  }

  
    ${font({
    family: Theme.fontFamily.tertiaryFontFamily,
    color: Theme.colors.additionalText,
    weight: 700,
    lineHeight: "120%",
    fontMin: 30,
    fontMax: 64,
  })}
`;

const DescriptionTitle = styled.p`
  padding: 3px 0;
  text-indent: 10px;
  text-align: justify;

  @media ${Theme.media.tablet} {
    text-align: justify;
    padding: 5px 0;
  }
  @media ${Theme.media.mobile} {
    padding: 5px 0;
  }

  @media ${Theme.media.desktop} {
    font-size:20px ;
  }

  ${font({
    color: Theme.colors.secondaryText,
    weight: 400,
    lineHeight: "150%",
    fontMin: 18,
    fontMax: 24,
  })}
`;

export const S = {
  MainWrapper,
  MainTitle,
  Title,
  DescriptionTitle,
};
