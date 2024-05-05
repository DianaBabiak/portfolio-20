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
          height={"42px"}
          width={"42px"}
          viewBox={"0 0 42 42"}
        />
      </a>
      <S.LogoTitle>Dziana Babiak</S.LogoTitle>
    </FlexWrapper>
  );
};
