import {ButtonLink} from "../buttonLink/ButtonLink.tsx";
import {ProjectTitle} from "../projectTitle/ProjectTitle.tsx";
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

interface InformationAboutProjectPropsType {
    projectTitle: string
    discretion: string
    buttonLink: string
    buttonTitle: string
    imgLink: string
    imgDiscretion?: string
    flexDirection?: string
    borderRadiusImg?: string
    secondaryButtonLink?:string
    secondaryButtonTitle?:string


}


export const InformationAboutProject = ({
                                            projectTitle,
                                            discretion,
                                            buttonLink,
                                            buttonTitle,
                                            imgDiscretion,
                                            imgLink,
                                            flexDirection,
                                            borderRadiusImg,
                                            secondaryButtonLink,
                                            secondaryButtonTitle
                                        }: InformationAboutProjectPropsType) => {
    return (
        <Wrapper direction={flexDirection}>
            <FlexWrapper direction={'column'} padding={'0 45px'} background={Theme.colors.secondaryBg}
                         justify={'center'}>
                <ProjectTitle title={projectTitle}/>
                <StyledDiscretion>{discretion}</StyledDiscretion>
                <FlexWrapper gap={'10px'}>
                    <ButtonLink link={buttonLink} title={buttonTitle} type={'project'}/>
                    {secondaryButtonLink && secondaryButtonTitle &&  <ButtonLink link={secondaryButtonLink } title={secondaryButtonTitle} type={'project'}/>}
                </FlexWrapper>


                </FlexWrapper>


                <StyledImgProject borderRadiusImg={borderRadiusImg} src={imgLink}
                                  alt={imgDiscretion || 'This is my project'}/>

        </Wrapper>


    )


}

interface WrapperPropsType {
    direction: string | undefined
}


const Wrapper = styled.div<WrapperPropsType>`
  display: flex;
  margin: 80px 0 0;
  flex-direction: ${(props: WrapperPropsType) => props.direction ?? 'row'};
  background: ${Theme.colors.secondaryBg};
  border-radius: 25px;
  

`


const StyledDiscretion = styled.p`
  color: ${Theme.colors.secondaryText};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  align-self: stretch;
  padding: 24px 0;
  text-align: left

`

interface BorderRadiusImgPropsType {
    borderRadiusImg: string | undefined
}


const StyledImgProject = styled.img<BorderRadiusImgPropsType>`
  object-fit: cover;
  width: 50%;
  height: 526px;
  flex-shrink: 0;
  border-radius: ${(props: BorderRadiusImgPropsType) => props.borderRadiusImg ?? '0'};
  
 
  
  
`



