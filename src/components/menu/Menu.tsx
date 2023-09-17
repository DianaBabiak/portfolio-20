import styled from "styled-components";


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
  }

`