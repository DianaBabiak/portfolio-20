import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const DesktopMenu = styled.nav`

  ul {
    display: flex;
    gap: 30px;
    padding: 0 20px 0 0;
  }

  li {

    &:hover {
      transform: scale(1.2);;
    }
  }
`;

const MenuLink = styled.a`
  color: ${Theme.colors.primaryText};
  font-family: ${Theme.fontFamily.quaternaryFontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;

`

const MobileMenu = styled.nav`
    
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 15px;
  width: 100px;
  height: 50px;
  z-index: 999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.accent};
    position: absolute;
    left: 48px;
    bottom: 15px;

    ${props => props.isOpen && css`
      background-color: rgba(255, 255, 255, 0);

    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.accent};;
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css`
        transform: rotate(-45deg) translateY(0);
        background-color: ${Theme.colors.secondaryBg};
        
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${Theme.colors.accent};;
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css`
        transform: rotate(45deg) translateY(0);
        width: 36px;
        background-color: ${Theme.colors.secondaryBg};
        
      `}
    }
  }


`;

interface MobileMenuPopupProps {
    isOpen: boolean
}

const MobileMenuPopup = styled.div<MobileMenuPopupProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99999;
  display: none;
  background-color: ${Theme.colors.accent};


  ${(props: MobileMenuPopupProps) => props.isOpen && css`
    display: flex;
    align-items: center;
    justify-content: center;

  `}
  ul {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;


  }

  li {
    
    &:hover {
      transform: scale(1.2);;
    }

  }

`;



export const S = {
    DesktopMenu,
    MenuLink,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup
}