import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { Icon } from "../../../components/icon/Icon.tsx";
import { SectionTitle } from "../sectionTitle/SectionTitle.tsx";
import { GeneralContainer } from "../../../components/GeneralContainer.ts";
import { SectionWrapper } from "../sectionWrapper/SectionWrapper.ts";
import { S } from "./Skills_Styles.ts";
import { ProjectsAnchors, SKILLS_ICON } from "../../../constant/constant.ts";

export const Skills = () => {
  return (
    <SectionWrapper id={ProjectsAnchors.Skills}>
      <GeneralContainer>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle title={"Skills"} />
          <S.WrapperIcon>
            {SKILLS_ICON.map((item) => {
              return <Icon iconId={item.iconId} key={item.iconId} />;
            })}
          </S.WrapperIcon>
        </FlexWrapper>
      </GeneralContainer>
    </SectionWrapper>
  );
};
