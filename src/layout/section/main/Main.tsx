import { ButtonLink } from "../../../components/buttonLink/ButtonLink.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { GeneralContainer } from "../../../components/GeneralContainer.ts";
import { SectionWrapper } from "../sectionWrapper/SectionWrapper.ts";
import { S } from "./Main_Styles.ts";
import Typewriter from "typewriter-effect";
import {ProjectsAnchors} from "../../../constant/constant.ts";

export const Main = () => {
  return (
    <SectionWrapper id={ProjectsAnchors.Home}>
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
            <S.Title>Hi, I am Dziana </S.Title>
            <S.DescriptionTitle>
              I am a frontend developer inspired by the world
              of technology and committed to constant
              growth. My interests lie in React, TypeScript,
              and Redux (RTK), and I strive to explore new
              opportunities such as React Native, Next.js, and
              GraphQL . In my spare time, I enjoy tackling
              challenging problems on Codewars and delving
              into cutting-edge technologies. I am open to
              new challenges and eager to discuss exciting
              prospects.
            </S.DescriptionTitle>
            <FlexWrapper gap={"12px"} margin={'20px 0 0'} justify={'center'}>
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
