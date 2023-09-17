
import {ButtonLink} from "../buttonLink/ButtonLink.tsx";
import {ProjectTitle} from "../projectTitle/ProjectTitle.tsx";
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import styled from "styled-components";

interface InformationAboutProjectPropsType {
    projectTitle: string
    discretion :string
    buttonLink:string
    buttonTitle:string
    imgLink:string
    imgDiscretion?:string
    flexDirection?:string

}



export const InformationAboutProject = ({projectTitle, discretion, buttonLink, buttonTitle, imgDiscretion, imgLink, flexDirection}:InformationAboutProjectPropsType)=>{
    return (
      <FlexWrapper direction={flexDirection}>
        <div>
            <ProjectTitle title={projectTitle}/>
            <p>{discretion}</p>
            <ButtonLink link={buttonLink} title={buttonTitle}/>
        </div>
        <StyledImgProject src={imgLink} alt={imgDiscretion||'This is my project'}/>
          </FlexWrapper>




    )


}


const StyledImgProject = styled.img`
object-fit: cover;
  width: 496px;
  height: 526px

`