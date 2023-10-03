import { SectionTitle } from "../sectionTitle/SectionTitle.tsx";
import { InformationAboutProject } from "./informationAboutProject/InformationAboutProject.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { GeneralContainer } from "../../../components/GeneralContainer.ts";
import { SectionWrapper } from "../sectionWrapper/SectionWrapper.ts";
import {
  PROJECT_INFORMATION,
  ProjectsAnchors,
} from "../../../constant/constant.ts";

export const Projects = () => {
  return (
    <SectionWrapper id={ProjectsAnchors.Projects}>
      <GeneralContainer>
        <FlexWrapper
          direction={"column"}
          align={"center"}
          padding={"0 106px"}
          adaptivePadding={"0"}
        >
          <SectionTitle title={"Projects"} />

          {PROJECT_INFORMATION.map((item) => {
            return (
              <InformationAboutProject
                key={item.id}
                projectTitle={item.projectTitle}
                projectDescription={item.projectDescription}
                primaryButton={item.primaryButton}
                secondaryButton={item.secondaryButton}
                image={item.image}
                flexDirection={item.flexDirection}
              />
            );
          })}
        </FlexWrapper>
      </GeneralContainer>
    </SectionWrapper>
  );
};
