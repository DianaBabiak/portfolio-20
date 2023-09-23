import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import footerImage from "../../../src/assets/images/footer.webp"
import {Icon} from "../../components/icon/Icon.tsx";
import {Theme} from "../../styles/Theme.ts";


export const Footer = () => {
    return (
        <StyledFooter>
            <div className='container'>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'} padding={'0 0 150px 0'}>
            <FlexWrapper justify={'center'} align={'center'}>
                <SocialLinkList>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={'email'} height={'32'} width={'42'} viewBox={'0 0 42px 32px'}/>
                        </IconLink>
                    </SocialItem>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={'linkedin'} height={'38'} width={'38'} viewBox={'0 0 38px 38px'}/>
                        </IconLink>
                    </SocialItem>
                    <SocialItem>
                        <IconLink href={'https://www.instagram.com/dibabiak/'}>
                            <Icon iconId={'instagram'} height={'38'} width={'38'} viewBox={'0 0 38px 38px'}/>
                        </IconLink>
                    </SocialItem>
                </SocialLinkList>
            </FlexWrapper>
            <StyledText>Dziana Babiak 2023</StyledText>
            {/*<StyledImgFooter src={footerImage} alt={'This is footer img'}  />*/}
                </FlexWrapper>
            </div>


        </StyledFooter>
    )


}


const StyledFooter = styled.footer`
  background-image: url("../../../src/assets/images/footer.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;



`

const StyledImgFooter = styled.img`
  object-fit: cover;


`

const StyledText = styled.small`
  color: ${Theme.colors.secondaryText};
  font-size: 16px;
  


`

const SocialLinkList = styled.ul`
display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 34px;

  
  


`

const SocialItem = styled.li`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  

`

const IconLink = styled.a`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  

`



