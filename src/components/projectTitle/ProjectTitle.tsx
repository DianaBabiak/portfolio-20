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



`