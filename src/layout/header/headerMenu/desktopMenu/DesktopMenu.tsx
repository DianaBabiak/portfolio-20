import {S} from "../HeaderMenu_Styles.ts"
import {HeaderMenu} from "../HeaderMenu.tsx";

interface MenuPropsType {
  menuItems: {
      name: string,
      url?: string
  }[];

}

export const DesktopMenu = ({ menuItems }: MenuPropsType) => {
  return (
    <S.DesktopMenu>
      <HeaderMenu/>
    </S.DesktopMenu>
  );
};

