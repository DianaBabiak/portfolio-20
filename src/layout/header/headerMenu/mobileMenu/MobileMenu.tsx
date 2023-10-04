import { S } from "../HeaderMenu_Styles.ts";
import { useState } from "react";
import { HeaderMenu } from "../HeaderMenu.tsx";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onBurgerButtonClick = () => {
    setIsOpen(!isOpen);
  };
    const closeMenu = () => {
        setIsOpen(false);
    };
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={isOpen} onClick={onBurgerButtonClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <HeaderMenu closeMenu={closeMenu} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
