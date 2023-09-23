import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";


interface MenuPropsTitle {
    title: string[]
}

export const Menu = ({title,index}: MenuPropsTitle) => {

    return (
        <StyledMenu>
            <ul key={index}>
                {title.map((item) => {
                    return <li>
                        <a href={''}>{item}</a>
                    </li>
                })}


            </ul>
        </StyledMenu>
    )
}


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    padding: 0 12px 0 0;
    
  }
  
  a{
    color: ${Theme.colors.primaryText};
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    
  }

`