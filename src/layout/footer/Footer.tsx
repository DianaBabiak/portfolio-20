import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import footerImage from "../../../src/assets/images/footer.webp"
import {Icon} from "../../components/icon/Icon.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper height={'50%'} justify={'center'}>
                <SocialLinkList>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={'email'}/>
                        </IconLink>
                    </SocialItem>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={'linkedin'}/>
                        </IconLink>
                    </SocialItem>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={'instagram'}/>
                        </IconLink>
                    </SocialItem>
                </SocialLinkList>
            </FlexWrapper>
            <StyledText>Dziana Babiak 2023</StyledText>
            {/*<StyledImgFooter src={footerImage} alt={'This is footer img'}  />*/}


        </StyledFooter>
    )


}


const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-image: url("../../../src/assets/images/footer.webp");
  background-size: 100% 100%;
  //background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 30vh;



`

const StyledImgFooter = styled.img`
  object-fit: cover;


`

const StyledText = styled.small`
  margin: 0 auto;


`

const SocialLinkList = styled.ul`
display: flex;
  


`

const SocialItem = styled.li`
  margin: 0 auto;


`

const IconLink = styled.a`
  margin: 0 auto;


`



