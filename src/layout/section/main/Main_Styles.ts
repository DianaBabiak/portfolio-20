import styled from "styled-components";
import { Theme } from "../../../styles/Theme.ts";
import { font } from "../../../styles/common.ts";

const MainWrapper = styled.div`
  display: flex;

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
  text-align: center;

  p {
    display: none;
  }

  @media ${Theme.media.additional}{
    color: ${Theme.colors.secondaryText};
  }
`;

const Title = styled.span`
  font-style: normal;
  text-align: center;
  
  @media ${Theme.media.desktop} {
    font-size: 46px ;
    margin: 20px 0;
  }

  
    ${font({
    family: Theme.fontFamily.tertiaryFontFamily,
    color: Theme.colors.additionalText,
    weight: 700,
    lineHeight: "120%",
    fontMin: 30,
    fontMax: 46,
  })}
`;

const DescriptionTitle = styled.p`
  padding: 5px 0;
  text-align: justify;

  @media ${Theme.media.tablet} {
    text-align: justify;
  }
  

  @media ${Theme.media.desktop} {
    font-size:20px ;
  }

  ${font({
    color: Theme.colors.secondaryText,
    weight: 400,
    lineHeight: "150%",
    fontMin: 18,
    fontMax: 20,
  })}
`;

export const S = {
  MainWrapper,
  MainTitle,
  Title,
  DescriptionTitle,
};
