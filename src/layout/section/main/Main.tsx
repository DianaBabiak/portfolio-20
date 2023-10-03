import { ButtonLink } from "../../../components/buttonLink/ButtonLink.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { GeneralContainer } from "../../../components/GeneralContainer.ts";
import { SectionWrapper } from "../sectionWrapper/SectionWrapper.ts";
import { S } from "./Main_Styles.ts";
import Typewriter from "typewriter-effect";
import {ProjectsAnchors} from "../../../constant/constant.ts";

export const Main = () => {
  return (
    <SectionWrapper>
      <GeneralContainer>
        <S.MainWrapper>
          <FlexWrapper direction={"column"} adaptiveAlign={"center"}>
            <S.MainTitle>
              <p>Software Developer</p>
              <Typewriter
                options={{
                  strings: ["Software Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                }}
              />
            </S.MainTitle>
            <S.Title>Hello, my name is Dziana Babiak </S.Title>
            <S.DescriptionTitle>
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </S.DescriptionTitle>
            <FlexWrapper gap={"12px"}>
              <ButtonLink
                label={"Projects"}
                link={"https://github.com/DianaBabiak"}
                type={"primary"}
                size={"medium"}
              />
              <ButtonLink
                label={"Linkedin"}
                link={"https://www.linkedin.com/in/dziana-babiak-56a7b71aa/"}
                type={"outline"}
                size={"medium"}
              />
            </FlexWrapper>
          </FlexWrapper>
        </S.MainWrapper>
      </GeneralContainer>
    </SectionWrapper>
  );
};
