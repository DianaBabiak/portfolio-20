import {S} from "../HeaderMenu_Styles.ts"

interface MenuPropsType {
  menuItems: {
      name: string,
      url?: string
  }[];

}

export const DesktopMenu = ({ menuItems }: MenuPropsType) => {
  return (
    <S.DesktopMenu>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.name}>
              <S.MenuLink href={item.url ?? ''}>{item.name}</S.MenuLink>
            </li>
          );
        })}
      </ul>
    </S.DesktopMenu>
  );
};

