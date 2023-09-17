import styled from "styled-components";

interface ButtonLinkPropsType {
    title:string
    link:string
}

export const ButtonLink=({title, link}:ButtonLinkPropsType)=>{
    return(
    <StyledButtonLink href={link}>{title} </StyledButtonLink>
    )
}


const StyledButtonLink = styled.a`
  width: 120px;
  height: 20px;
  display: inline-block;
  padding: 10px 20px; 
  background-color:#FDC435;
;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px; 
  font-size: 16px;



`