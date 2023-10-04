import { Logo } from "./logo/Logo.tsx";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import { FlexWrapper } from "../../components/FlexWrapper.ts";
import { GeneralContainer } from "../../components/GeneralContainer.ts";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu.tsx";
import { S } from "./Header_Styles.ts";
import { useEffect, useState } from "react";
import {Theme} from "../../styles/Theme.ts";

export const Header = () => {
  const [scrollBackground, setScrollBackground] = useState('transparent');
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop > 150) {
      setScrollBackground(Theme.colors.accent);
    } else {
      setScrollBackground('transparent');
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header scrollBackground={scrollBackground}>
      <GeneralContainer>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </FlexWrapper>
      </GeneralContainer>
    </S.Header>
  );
};
