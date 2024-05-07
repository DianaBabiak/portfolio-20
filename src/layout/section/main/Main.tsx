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
              I am a frontend developer with skills in solving tasks of varying complexity. My approach to development is not only focused on achieving results on time but also based on the principles of SOLID, DRY, KISS. In the past, I successfully managed a department where I organized effective team collaboration to achieve common goals. I am ready to become an integral part of your team and contribute to the success of your projects.
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
