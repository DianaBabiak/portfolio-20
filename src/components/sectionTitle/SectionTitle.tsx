import styled from "styled-components";

interface SectionTitlePropsType {
    title:string
}
export const SectionTitle = ({title}:SectionTitlePropsType)=>{
    return (
        <StyledSectionTitle>{title}</StyledSectionTitle>
    )


}


const StyledSectionTitle = styled.h2`



`