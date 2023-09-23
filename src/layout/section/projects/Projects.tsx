import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import imageProjectOne from "../../../assets/images/project1.webp"
import imageProjectTwo from "../../../assets/images/project2.webp"
import imageProjectThree from "../../../assets/images/project3.webp"
import {InformationAboutProject} from "../../../components/informationAboutProject/InformationAboutProject.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";


export const Projects = () => {
    return (
        <StyledProjects>
            <div className='container'>
                <FlexWrapper direction={'column'} align={'center'} padding={'0 106px'}>
            <SectionTitle title={'Projects'}/>
            <InformationAboutProject buttonLink={'#'} buttonTitle={'View Project'}
                                     secondaryButtonLink={'#'} secondaryButtonTitle={'View Demo'}
                                     discretion={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'}
                                     projectTitle={'Project Name'} imgLink={imageProjectOne}
                                     borderRadiusWrapper={'25px'}
                                     borderRadiusImg={'0 25px 25px 0'}/>
            <InformationAboutProject buttonLink={'#'} buttonTitle={'View Project'}
                                     secondaryButtonLink={'#'} secondaryButtonTitle={'View Demo'}
                                     discretion={'What was your role, your deliverables, if the project was personal, freelancing.'}
                                     projectTitle={'Project Name'} imgLink={imageProjectTwo}
                                     flexDirection={'row-reverse'}
                                     borderRadiusWrapper={'25px'}
                                     borderRadiusImg={'25px 0 0 25px'}/>
            <InformationAboutProject buttonLink={'#'} buttonTitle={'View Project'}
                                     secondaryButtonLink={'#'} secondaryButtonTitle={'View Demo'}
                                     discretion={'You can also add in this description the type of the project, if it was for web, mobile, electron.'}
                                     projectTitle={'Project Name'} imgLink={imageProjectThree}
                                     borderRadiusWrapper={'25px 0 0 25px'}
                                     borderRadiusImg={'0 25px 25px 0'}/>
                </FlexWrapper>
            </div>
        </StyledProjects>


    )


}


const StyledProjects = styled.section`
  margin-bottom: 74px;
`