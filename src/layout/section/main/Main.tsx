import { ButtonLink } from "../../../components/buttonLink/ButtonLink.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { GeneralContainer } from "../../../components/GeneralContainer.ts";
import { SectionWrapper } from "../sectionWrapper/SectionWrapper.ts";
import { S } from "./Main_Styles.ts";
import Typewriter from "typewriter-effect";

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
              I am a Front-end developer. I work with technologies such as React, TypeScript, Redux (RTK), and other related libraries.
            </S.DescriptionTitle>
            <S.DescriptionTitle>
              I am constantly improving my skills and I want to expand them with new technologies like React Native, Next.js, GraphQL, and others.
            </S.DescriptionTitle>
            <S.DescriptionTitle>
              In my free time, I enjoy solving problems on Codewars and learning about new technologies.
            </S.DescriptionTitle>
            <S.DescriptionTitle>
              I am always open to new opportunities and would be happy to chat and consider your proposals.
            </S.DescriptionTitle>
            <FlexWrapper gap={"12px"} margin={'20px 0 0'}>
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
