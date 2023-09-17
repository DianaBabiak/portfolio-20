import mainPhoto from "../../../assets/images/girl.webp"
import styled from "styled-components";
import {ButtonLink} from "../../../components/buttonLink/ButtonLink.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={'space-between'} align={'spase-around'}>
                <FlexWrapper direction={'column'}>
                    <div>
                        <h1>Software Developer</h1>
                        <span>Hello,  my name is Dziana Babiak</span>
                        <p>Short text with details about you, what you do or your professional career. You can add more
                            information on the about page.</p>
                    </div>
                    <FlexWrapper>
                        <ButtonLink title={'Projects'} link={'#'}/>
                        <ButtonLink title={'Linkedin'} link={'#'}/>
                    </FlexWrapper>
                </FlexWrapper>
                <StyledMainPhoto src={mainPhoto} alt={'This main photo'}/>

            </FlexWrapper>
        </StyledMain>
    )
}


const StyledMainPhoto = styled.img`
  width: 720px;
  height: 629px;



`

const StyledMain = styled.section`
background-color: lightseagreen;
  height: 500px;
`