import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme.ts";

interface ButtonLinkPropsType {
    title:string
    link:string
    type?: 'primary'| 'outline' | 'project'
}

export const ButtonLink=({title, link, type}:ButtonLinkPropsType)=>{
    return(
    <StyledButtonLink type={type} href={link}>{title} </StyledButtonLink>
    )
}


const StyledButtonLink = styled.a`
  background-color:${Theme.colors.accent};
  width: 115px;
  height: 43px;
  display: inline-block;
  padding: 8px 24px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  border-radius: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; 
  color: ${Theme.colors.primaryText};
  

  ${props => props.type === 'primary' && css<ButtonLinkPropsType>`
    border:none;

  `}

  ${props => props.type === 'outline' && css<ButtonLinkPropsType>`
    border: 1px solid ;
    background: transparent;
  `}


  ${props => props.type === 'project' && css<ButtonLinkPropsType>`
    border: 1px solid ;
    background: transparent;
    border-radius: 24px;
    width: 150px;
    font-size: 17px;
   
  `}


`