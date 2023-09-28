import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.tsx";
import imageProjectOne from "../../../assets/images/project1.webp";
import imageProjectTwo from "../../../assets/images/project2.webp";
import imageProjectThree from "../../../assets/images/project3.webp";
import { InformationAboutProject } from "../../../components/informationAboutProject/InformationAboutProject.tsx";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper.tsx";
import {StyledContainer} from "../../../components/styledContainer/StyledContainer.ts";

export const Projects = () => {
  return (
    <StyledProjects>
      <StyledContainer>
        <FlexWrapper direction={"column"} align={"center"} padding={"0 106px"} adaptivePadding={"0"} >
          <SectionTitle title={"Projects"} />
          <InformationAboutProject
              projectTitle={"Project Name"}
              projectDescription={
                  "What was your role, your deliverables, if the project was personal, freelancing. What was your role, your deliverables, if the project was personal, freelancing."
              }
              primaryButton={{link:"#", label:"View Project"}}
              secondaryButton={{link:"#",label:"View Demo"}}
              image={{link:imageProjectOne, borderRadius:"0 25px 25px 0"}}
          />
          <InformationAboutProject
            projectTitle={"Project Name"}
            projectDescription={
              "What was your role, your deliverables, if the project was personal, freelancing. What was your role, your deliverables, if the project was personal, freelancing"
            }
            flexDirection={"row-reverse"}
            primaryButton={{link:"#", label:"View Project"}}
            secondaryButton={{link:"#",label:"View Demo"}}
            image={{link:imageProjectTwo, borderRadius:"25px 0 0 25px"}}
          />
          <InformationAboutProject
              projectTitle={"Project Name"}
              projectDescription={
                  "What was your role, your deliverables, if the project was personal, freelancing. What was your role, your deliverables, if the project was personal, freelancing"
              }
              primaryButton={{link:"#", label:"View Project"}}
              secondaryButton={{link:"#",label:"View Demo"}}
              image={{link:imageProjectThree, borderRadius:"0 25px 25px 0"}}
          />
        </FlexWrapper>
      </StyledContainer>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  margin-bottom: 74px;
`;
