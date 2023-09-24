import styled from "styled-components";
import { Theme } from "../../styles/Theme.ts";

interface MenuPropsType {
  menuItems: {
      name: string,
      url?: string
  }[];
}

export const Menu = ({ menuItems }: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.name}>
              <a href={item.url ?? ''}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    padding: 0 20px 0 0;
  }
  
  li {
    &:hover{
      transform: scale(1.2);;
    }
    
  }

  a {
    color: ${Theme.colors.primaryText};
    font-family:${Theme.fontFamily.quaternaryFontFamily};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
`;
