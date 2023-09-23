import styled from "styled-components";

interface ProjectTitlePropsType {
    title:string
}
export const ProjectTitle = ({title}:ProjectTitlePropsType)=>{
    return (
        <StyledProjectTitle>{title}</StyledProjectTitle>
    )


}


const StyledProjectTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  align-self: stretch;
  text-align: left


`