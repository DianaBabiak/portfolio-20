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
              <p>Frontend Developer</p>
              <Typewriter
                options={{
                  strings: ["Frontend Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                }}
              />
            </S.MainTitle>
            <S.Title>Hello, I am Dziana. </S.Title>
            <S.DescriptionTitle>
                I am a Frontend Developer with over 2.5 years of experience, including more than 1 year of commercial experience. My skills include deep knowledge of JavaScript, TypeScript, React, and Redux Toolkit. I specialize in creating high-quality web services, writing scalable and testable code. I am ready to work both independently and in a team, capable of solving complex tasks
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
