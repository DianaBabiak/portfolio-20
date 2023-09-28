import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "./menu/Menu.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {CONSTANT} from "../../constant/constant.ts";
import {StyledContainer} from "../../components/styledContainer/StyledContainer.ts";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

export const Header = () => {

    return (
        <StyledHeader>
            <StyledContainer>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <Menu menuItems={CONSTANT.menuItems}/>
                    <MobileMenu menuItems={CONSTANT.menuItems}/>
                </FlexWrapper>
            </StyledContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  margin-bottom: 55px;
  position: relative;
  z-index: 9999;
`;

