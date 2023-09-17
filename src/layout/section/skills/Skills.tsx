import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";


export const Skills = ()=>{

    return (

        <StyledSkills>
            <SectionTitle title={'Skills'}/>
            < FlexWrapper wrap={'wrap'}>
            <Icon iconId={"js"}/>
            <Icon iconId={"css"}/>
            <Icon iconId={"html"}/>
            <Icon iconId={"vector"}/>
            <Icon iconId={"github"}/>
            <Icon iconId={"git"}/>
            <Icon iconId={"react"}/>
            <Icon iconId={"sass"}/>
            <Icon iconId={"bootstrap"}/>
            <Icon iconId={"tailwind"}/>
                </FlexWrapper>









        </StyledSkills>
    )
}


const StyledSkills = styled.section`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: darkseagreen;
  

`