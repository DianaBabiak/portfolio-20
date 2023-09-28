import {ButtonLink} from "../buttonLink/ButtonLink.tsx";
import {ProjectTitle} from "../projectTitle/ProjectTitle.tsx";
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

interface InformationAboutProjectPropsType {
    projectTitle: string;
    projectDescription: string;
    flexDirection?: string;

    primaryButton: {
        link: string;
        label: string;
    };

    secondaryButton?: {
        link: string;
        label: string;
    };

    image: {
        link: string;
        description?: string;
        borderRadius?: string;
    }
}

export const InformationAboutProject = ({
                                            projectTitle,
                                            projectDescription,
                                            flexDirection,
                                            primaryButton,
                                            secondaryButton,
                                            image
                                        }: InformationAboutProjectPropsType) => {
    return (
        <Wrapper direction={flexDirection}>
            <FlexWrapper
                direction={"column"}
                padding={"0 45px"}
                background={Theme.colors.secondaryBg}
                justify={"center"}
                adaptiveAlign={'center'}
                width={'50%'}
                adaptiveWidth={'90%'}
            >
                <ProjectTitle title={projectTitle}/>
                <StyledDescription>{projectDescription}</StyledDescription>
                <FlexWrapper gap={"10px"} wrap={'wrap'} justify={'center'} >
                    <ButtonLink link={primaryButton.link} label={primaryButton.label} type={"outline"} size={'large'}/>
                    {secondaryButton && (
                        <ButtonLink
                            link={secondaryButton.link}
                            label={secondaryButton.label}
                            type={"outline"}
                            size={'large'}
                        />
                    )}
                </FlexWrapper>
            </FlexWrapper>

            <StyledProjectImg
                borderradius={image.borderRadius}
                src={image.link}
                alt={image.description ?? "This is my project"}
            />
        </Wrapper>
    );
};

interface WrapperPropsType {
    direction: string | undefined;
}

const Wrapper = styled.div<WrapperPropsType>`
  display: flex;
  margin: 80px 0 0;
  flex-direction: ${(props: WrapperPropsType) => props.direction ?? "row"};
  background: ${Theme.colors.secondaryBg};
  border-radius: 25px;
  flex-wrap: wrap;
  
  @media ${Theme.media.tablet}{
    align-items: center;
    justify-content: center;
    margin: 50px 0 0;
    gap: 24px;
    
  }
`;

const StyledDescription = styled.p`
  color: ${Theme.colors.secondaryText};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  align-self: stretch;
  padding: 24px 0;
  text-align: left;

  @media ${Theme.media.tablet}{
    text-align: justify;

  }
`;

interface BorderRadiusImgPropsType {
    borderradius: string | undefined;
}

const StyledProjectImg = styled.img<BorderRadiusImgPropsType>`
  object-fit: cover;
  width: 50%;
  height: 526px;
  flex-shrink: 0;
  border-radius: ${(props: BorderRadiusImgPropsType) =>
          props.borderradius ?? "0"};
  
  @media ${Theme.media.tablet}{
    width: 90%;
    border-radius: 0;
    padding-bottom: 30px;
    
  }
  
  
  
`;
