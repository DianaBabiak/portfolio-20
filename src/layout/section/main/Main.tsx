import {ButtonLink} from "../../../components/buttonLink/ButtonLink.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {GeneralContainer} from "../../../components/GeneralContainer.ts";
import {MobileUserPhoto} from "../../userPhoto/mobileUserPhoto/MobileUserPhoto.tsx";
import {SectionWrapper} from "../sectionWrapper/SectionWrapper.ts";
import {S} from "./Main_Styles.ts";

export const Main = () => {
    return (
        <SectionWrapper>
            <GeneralContainer>
                <S.MainWrapper>
                    <FlexWrapper direction={"column"} adaptiveAlign={'center'}>
                        <S.MainTitle>Software Developer</S.MainTitle>
                        <S.Title>Hello, my name is Dziana Babiak </S.Title>
                        <S.DescriptionTitle>
                            Short text with details about you, what you do or your professional career. You can add more
                            information on the about page.
                        </S.DescriptionTitle>
                        <FlexWrapper gap={"12px"}>
                            <ButtonLink label={"Projects"} link={"#"} type={"primary"} size={'medium'}/>
                            <ButtonLink label={"Linkedin"} link={"#"} type={"outline"} size={'medium'}/>
                        </FlexWrapper>
                    </FlexWrapper>
                </S.MainWrapper>
            </GeneralContainer>
        </SectionWrapper>
    );
};

