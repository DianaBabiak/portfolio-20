import { Icon } from "../../../components/icon/Icon.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { S } from "./Logo_Styles.ts";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
  return (
    <FlexWrapper
      justify={"center"}
      align={"center"}
      margin={"10px 0"}
      gap="4px"
    >
      <a onClick={scroll.scrollToTop}>
        <Icon
          iconId={"logo"}
          height={"50px"}
          width={"50px"}
          viewBox={"0 0 50 50"}
        />
      </a>
      <S.LogoTitle>Dziana Babiak</S.LogoTitle>
    </FlexWrapper>
  );
};
