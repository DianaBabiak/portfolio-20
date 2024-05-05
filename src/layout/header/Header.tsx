import { Logo } from "./logo/Logo.tsx";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import { FlexWrapper } from "../../components/FlexWrapper.ts";
import { GeneralContainer } from "../../components/GeneralContainer.ts";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu.tsx";
import { S } from "./Header_Styles.ts";
import {useEffect, useRef, useState} from "react";


export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  const windowRef = useRef(window);


  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    windowRef.current.addEventListener("resize", handleWindowResize);
    return () => windowRef.current.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
      <S.Header >
        <GeneralContainer>
          <FlexWrapper justify="space-between" align="center">
            <Logo />
            {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
          </FlexWrapper>
        </GeneralContainer>
      </S.Header>
  );
};
