import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { Icon } from "../../../components/icon/Icon.tsx";
import { SectionTitle } from "../sectionTitle/SectionTitle.tsx";
import { GeneralContainer } from "../../../components/GeneralContainer.ts";
import { SectionWrapper } from "../sectionWrapper/SectionWrapper.ts";
import { S } from "./Skills_Styles.ts";
import { ProjectsAnchors, SKILLS_ICON } from "../../../constant/constant.ts";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Skills = () => {
    const responsive = {
        0:{ items: 2 },
        470:{ items: 3 },
        576: { items: 4 },
        768: { items: 5 },
        966:{ items: 6 }
    };
  return (
    <SectionWrapper id={ProjectsAnchors.Skills}>
      <GeneralContainer>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle title={"Skills"} />
          <S.WrapperIcon>

          </S.WrapperIcon>
            <AliceCarousel

                items={SKILLS_ICON.map((item,index) => {
                    return <Icon iconId={item.iconId} key={index} />;
                })}
                responsive={responsive}
                autoPlay
                autoPlayControls
                autoPlayStrategy="none"
                autoPlayInterval={1000}
                animationDuration={2000}
                animationType="fadeout"
                infinite
                touchTracking={false}
                disableDotsControls
                disableButtonsControls
            />
        </FlexWrapper>
      </GeneralContainer>
    </SectionWrapper>
  );
};
