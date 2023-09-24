import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper.tsx";
import { Icon } from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.tsx";
import {StyledContainer} from "../../../components/styledContainer/StyledContainer.ts";

export const Skills = () => {
  return (
    <StyledSkills>
      <StyledContainer>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle title={"Skills"} />
          <WrapperIcon>
            <Icon iconId={"js"} />
            <Icon iconId={"css"} />
            <Icon iconId={"html"} />
            <Icon iconId={"vector"} />
            <Icon iconId={"github"} />
            <Icon iconId={"html"} />
            <Icon iconId={"git"} />
            <Icon iconId={"react"} />
            <Icon iconId={"sass"} />
            <Icon
              iconId={"bootstrap"}
              height={"88px"}
              width={"88px"}
              viewBox={"0 0 88 88"}
            />
            <Icon iconId={"tailwind"} />
            <Icon iconId={"sass"} />
          </WrapperIcon>
        </FlexWrapper>
      </StyledContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  margin-bottom: 74px;
`;


const WrapperIcon = styled.div`
  width: 100%;
  margin-top: 74px;
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-template-rows: repeat(2, auto);
  gap: 74px 0;
  justify-content: space-between;
  align-content: space-between;
  

`