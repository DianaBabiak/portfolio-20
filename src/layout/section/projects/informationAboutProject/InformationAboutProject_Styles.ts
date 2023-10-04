import styled from "styled-components";
import { Theme } from "../../../../styles/Theme.ts";
import { font } from "../../../../styles/common.ts";

interface WrapperPropsType {
  direction: string | undefined;
}

const ProjectWrapper = styled.div<WrapperPropsType>`
  display: flex;
  margin: 80px 0 0;
  flex-direction: ${(props: WrapperPropsType) => props.direction ?? "row"};
  background: ${Theme.colors.secondaryBg};
  border-radius: 25px;
  flex-wrap: wrap;

  @media ${Theme.media.tablet} {
    align-items: center;
    justify-content: center;
    margin: 50px 0 0;
    gap: 24px;
  }
`;

const ProjectTitle = styled.h3`
  align-self: stretch;
  text-align: left;

  @media ${Theme.media.tablet} {
    text-align: center;
  }
  @media ${Theme.media.desktop} {
    font-size:40px ;
  }

  ${font({
    family: Theme.fontFamily.secondaryFontFamily,
    lineHeight: "150%",
    fontMin: 26,
    fontMax: 40,
  })}
`;

const ProjectDescription = styled.p`
  align-self: stretch;
  padding: 24px 0;
  text-align: left;
  font-size: 18px;

  @media ${Theme.media.tablet} {
    text-align: justify;
  }

  ${font({
    color: Theme.colors.secondaryText,
    lineHeight: "150%",
    weight: 400,
  })}
`;

interface ProjectImgPropsType {
  borderradius: string | undefined;
}

const ProjectImg = styled.img<ProjectImgPropsType>`
  object-fit: cover;
  width: 50%;
  height: 526px;
  flex-shrink: 0;
  border-radius: ${(props: ProjectImgPropsType) => props.borderradius ?? "0"};

  @media ${Theme.media.tablet} {
    width: 90%;
    border-radius: 0;
    padding-bottom: 30px;
  }
`;
export const S = {
  ProjectWrapper,
  ProjectTitle,
  ProjectDescription,
  ProjectImg,
};
