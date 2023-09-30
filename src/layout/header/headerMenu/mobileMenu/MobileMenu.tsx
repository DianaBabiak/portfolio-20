import {S} from "../HeaderMenu_Styles.ts"

interface MenuPropsType {
    menuItems: {
        name: string,
        url?: string
    }[];
}

export const MobileMenu = ({menuItems}: MenuPropsType) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <ul>
                    {menuItems.map((item) => {
                        return (
                            <li key={item.name}>
                                <S.MenuLink href={item.url ?? ''}>{item.name}</S.MenuLink>
                            </li>
                        );
                    })}
                </ul>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};
