import {ButtonLink} from "../../../../components/buttonLink/ButtonLink.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {Theme} from "../../../../styles/Theme.ts";
import {S} from "./InformationAboutProject_Styles.ts";

interface InformationAboutProjectPropsType {
    projectTitle: string;
    projectDescription: string;
    flexDirection?: string;

    primaryButton: {
        link: string;
        label: string;
    };

    secondaryButton?: {
        link: string;
        label: string;
    };

    image: {
        link: string;
        description?: string;
        borderRadius?: string;
    }
}

export const InformationAboutProject = ({
                                            projectTitle,
                                            projectDescription,
                                            flexDirection,
                                            primaryButton,
                                            secondaryButton,
                                            image
                                        }: InformationAboutProjectPropsType) => {
    return (
        <S.ProjectWrapper direction={flexDirection}>
            <FlexWrapper
                direction={"column"}
                padding={"0 45px"}
                background={Theme.colors.secondaryBg}
                justify={"center"}
                adaptiveAlign={'center'}
                width={'50%'}
                adaptiveWidth={'90%'}
            >
                <S.ProjectTitle>{projectTitle}</S.ProjectTitle>
                <S.ProjectDescription>{projectDescription}</S.ProjectDescription>
                <FlexWrapper gap={"10px"} wrap={'wrap'} adaptiveJustify={'center'}>
                    <ButtonLink link={primaryButton.link} label={primaryButton.label} type={"outline"} size={'large'}/>
                    {secondaryButton && (
                        <ButtonLink
                            link={secondaryButton.link}
                            label={secondaryButton.label}
                            type={"outline"}
                            size={'large'}
                        />
                    )}
                </FlexWrapper>
            </FlexWrapper>

            <S.ProjectImg
                borderradius={image.borderRadius}
                src={image.link}
                alt={image.description ?? "This is my project"}
            />
        </S.ProjectWrapper>
    );
};
