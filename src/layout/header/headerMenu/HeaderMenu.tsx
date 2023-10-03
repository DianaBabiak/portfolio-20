import { S } from "./HeaderMenu_Styles.ts";
import { MENU_ITEMS, ProjectsAnchors } from "../../../constant/constant.ts";

export const HeaderMenu = () => {
  return (
    <ul>
      {MENU_ITEMS.map((item, index) => {
        return (
          <li key={index}>
            <S.MenuLink
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
