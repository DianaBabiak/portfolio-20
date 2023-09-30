import {Logo} from "./logo/Logo.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {GeneralContainer} from "../../components/GeneralContainer.ts";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {S} from "./Header_Styles.ts";
import {useEffect, useState} from "react";
import {menuItems} from "../../constant/data.ts";

export const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <S.Header>
            <GeneralContainer>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={menuItems}/>
                                        : <DesktopMenu menuItems={menuItems}/>}
                </FlexWrapper>
            </GeneralContainer>
        </S.Header>
    );
};



