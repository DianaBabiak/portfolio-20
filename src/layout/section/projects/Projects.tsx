import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import imageProjectOne from "../../../assets/images/project1.webp"
import imageProjectTwo from "../../../assets/images/project2.webp"
import imageProjectThree from "../../../assets/images/project3.webp"
import {InformationAboutProject} from "../../../components/informationAboutProject/InformationAboutProject.tsx";


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle title={'Projects'}/>
            <InformationAboutProject buttonLink={'#'} buttonTitle={'View Project'}
                                     discretion={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'}
                                     projectTitle={'Project Name'} imgLink={imageProjectOne}/>
            <InformationAboutProject buttonLink={'#'} buttonTitle={'View Project'}
                                     discretion={'What was your role, your deliverables, if the project was personal, freelancing.'}
                                     projectTitle={'Project Name'} imgLink={imageProjectTwo}
                                     flexDirection={'row-reverse'}/>
            <InformationAboutProject buttonLink={'#'} buttonTitle={'View Project'}
                                     discretion={'You can also add in this description the type of the project, if it was for web, mobile, electron.'}
                                     projectTitle={'Project Name'} imgLink={imageProjectThree}/>

        </StyledProjects>


    )


}


const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


`