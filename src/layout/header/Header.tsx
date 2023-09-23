import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";

export const Header = () => {

    const arrayTitleMenu = ['About', 'Projects', 'Contacts']
    return (
        <StyledHeader>
           <div className='container'>
               <FlexWrapper justify={'space-between'} align={'center'}>
                   <Logo/>
                   <Menu title={arrayTitleMenu}/>
               </FlexWrapper>

           </div>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
  margin-bottom: 55px;
 
  position: relative;
  z-index: 99999999;



`