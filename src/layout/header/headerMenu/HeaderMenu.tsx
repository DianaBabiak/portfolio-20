import { S } from "./HeaderMenu_Styles.ts";
import { MENU_ITEMS, ProjectsAnchors } from "../../../constant/constant.ts";

interface HeaderMenuPropsType {
  closeMenu?: ()=>void
}


export const HeaderMenu = ({ closeMenu }:HeaderMenuPropsType) => {
  return (
    <ul>
      {MENU_ITEMS.map((item, index) => {
        return (
          <li key={index}>
            <S.MenuLink
                onClick={() => {
                  closeMenu?.()
                }}
              activeClass="active"
              to={item.url ?? ProjectsAnchors.Home}
              smooth={true}
              spy={true}
            >
              {item.name}
            </S.MenuLink>
          </li>
        );
      })}
    </ul>
  );
};
