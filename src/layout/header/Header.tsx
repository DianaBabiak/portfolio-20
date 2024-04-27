import { Logo } from "./logo/Logo.tsx";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import { FlexWrapper } from "../../components/FlexWrapper.ts";
import { GeneralContainer } from "../../components/GeneralContainer.ts";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu.tsx";
import { S } from "./Header_Styles.ts";
import {useEffect, useRef, useState} from "react";
import {Theme} from "../../styles/Theme.ts";


export const Header = () => {
  const [scrollBackground, setScrollBackground] = useState('transparent');
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  const windowRef = useRef(window);

  const handleScroll = () => {
    if (windowRef.current.scrollY > 50) {
      setScrollBackground(Theme.colors.accent);
    } else {
      setScrollBackground('transparent');
    }
  };

  useEffect(() => {
    windowRef.current.addEventListener('scroll', handleScroll);

    return () => {
      windowRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    windowRef.current.addEventListener("resize", handleWindowResize);
    return () => windowRef.current.removeEventListener("resize", handleWindowResize);
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
