import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";


export const Skills = () => {

    return (

        <StyledSkills>
            <div className='container'>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle title={'Skills'}/>

                    <div className='wrapperIcon'>
                        <Icon iconId={"js"}/>
                        <Icon iconId={"css"}/>
                        <Icon iconId={"html"}/>
                        <Icon iconId={"vector"}/>
                        <Icon iconId={"github"}/>
                        <Icon iconId={"html"}/>
                    </div>
                    <div className='wrapperIcon'>
                        <Icon iconId={"git"}/>
                        <Icon iconId={"react"}/>
                        <Icon iconId={"sass"}/>
                        <Icon iconId={"bootstrap"} height={'88px'} width={'88px'} viewBox={'0 0 88px 88 px'}/>
                        <Icon iconId={"tailwind"}/>
                        <Icon iconId={"sass"}/>
                    </div>
                </FlexWrapper>
            </div>


        </StyledSkills>
    )
}


const StyledSkills = styled.section`
  margin-bottom: 74px;



`