import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {

    const arrayTitleMenu = ['About', 'Projects', 'Contacts']
    return (
        <StyledHeader>
            <Logo/>
            <Menu title={arrayTitleMenu}/>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;

`