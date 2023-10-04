import styled, { css } from "styled-components";
import { Theme } from "../../../styles/Theme.ts";
import { Link } from "react-scroll";

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    padding: 0 20px 0 0;
  }
  li {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuLink = styled(Link)`
  color: ${Theme.colors.primaryText};
  font-family: ${Theme.fontFamily.quaternaryFontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  transition: ${Theme.animation.transition};

  &:hover,
  &.active {
    color: ${Theme.colors.secondaryText};
    cursor: pointer;
  }

  @media ${Theme.media.tablet} {
    font-size: 40px;
    font-weight: 1000;
  }
`;

const MobileMenu = styled.nav``;

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
    background-color: ${Theme.colors.secondaryBg};
    position: absolute;
    left: 48px;
    bottom: 15px;

    ${(props) =>
      props.isOpen &&
      css`
        background-color: rgba(255, 255, 255, 0);
      `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.secondaryBg};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${Theme.colors.secondaryBg};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;

interface MobileMenuPopupProps {
  isOpen: boolean;
}

const MobileMenuPopup = styled.div<MobileMenuPopupProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99999;
  background-color: ${Theme.colors.accent};
  opacity: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: ${Theme.animation.mobileMenuTransition};

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: ${Theme.animation.mobileMenuTransition};
  }

  li {
    &:hover {
      transform: scale(1.2);
    }
  }

  ${(props: MobileMenuPopupProps) =>
    props.isOpen &&
    css`
      transform: translateY(0);

      & ul {
        gap: 50px;
      }
    `}
`;

export const S = {
  DesktopMenu,
  MenuLink,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
};
