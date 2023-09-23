import mainPhoto from "../../../assets/images/girl.webp"
import mainBg from "../../../assets/images/webstorm.svg"
import styled from "styled-components";
import {ButtonLink} from "../../../components/buttonLink/ButtonLink.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.ts";
import {MainBg} from "../../../components/mainBg/MainBg.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <div className='container'>
                <WrapperMain>
                    <FlexWrapper direction={'column'}>
                        <MainTitle>Software Developer</MainTitle>
                        <Title>Hello, my name is Dziana Babiak</Title>
                        <DescriptionTitle>Short text with details about you, what you do or your professional career. You
                            can add
                            more
                            information on the about page.</DescriptionTitle>
                        <FlexWrapper gap={'12px'}>
                            <ButtonLink title={'Projects'} link={'#'} type={'primary'}/>
                            <ButtonLink title={'Linkedin'} link={'#'} type={'outline'}/>
                        </FlexWrapper>
                    </FlexWrapper>

                </WrapperMain>

                <MainBg/>
            </div>
        </StyledMain>
    )
}


const StyledMain = styled.section`
  display: flex;
  padding-bottom: 105px;
  margin-bottom: 74px;

`

const WrapperMain = styled.div`
  position: relative;
  z-index: 999999;
  max-width: 38%;
`

const MainTitle = styled.h1`
  color: ${Theme.colors.accent};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  align-self: stretch;
  

`

const Title = styled.span`
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

`

const DescriptionTitle = styled.p`
  color: ${Theme.colors.secondaryText};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; 
  padding: 32px 0;

`

