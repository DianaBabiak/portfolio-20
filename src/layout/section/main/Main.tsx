import styled from "styled-components";
import { ButtonLink } from "../../../components/buttonLink/ButtonLink.tsx";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper.tsx";
import { Theme } from "../../../styles/Theme.ts";
import { UserPhoto } from "../../../components/userPhoto/UserPhoto.tsx";
import {StyledContainer} from "../../../components/styledContainer/StyledContainer.ts";

export const Main = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <WrapperMain>
          <FlexWrapper direction={"column"}>
            <MainTitle>Software Developer</MainTitle>
            <Title>Hello, my name is Dziana Babiak</Title>
            <DescriptionTitle>
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </DescriptionTitle>
            <FlexWrapper gap={"12px"}>
              <ButtonLink label={"Projects"} link={"#"} type={"primary"} size={'medium'}  />
              <ButtonLink label={"Linkedin"} link={"#"} type={"outline"} size={'medium'} />
            </FlexWrapper>
          </FlexWrapper>
        </WrapperMain>
        <UserPhoto />
      </StyledContainer>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding-bottom: 105px;
  margin-bottom: 74px;
`;

const WrapperMain = styled.div`
  position: relative;
  z-index: 999999;
  max-width: 38%;
`;

const MainTitle = styled.h1`
  color: ${Theme.colors.accent};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  align-self: stretch;
`;

const Title = styled.span`
  color: ${Theme.colors.additionalText};
  font-family:${Theme.fontFamily.tertiaryFontFamily};
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const DescriptionTitle = styled.p`
  color: ${Theme.colors.secondaryText};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  padding: 32px 0;
`;
