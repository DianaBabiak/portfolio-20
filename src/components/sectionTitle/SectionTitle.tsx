import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

interface SectionTitlePropsType {
    title: string
}

export const SectionTitle = ({title}: SectionTitlePropsType) => {
    return (
            <StyledSectionTitle>{title}</StyledSectionTitle>

    )


}


const StyledSectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  position: relative;
  //margin-top: 74px;
  
  &::before{
    content: '';
    display: inline-block;
    width: 100px;
    height: 4px;
    background-color: ${Theme.colors.accent};
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: -5px;
  }



`


