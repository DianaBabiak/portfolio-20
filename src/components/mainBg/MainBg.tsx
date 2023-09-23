import mainBg from "../../assets/images/webstorm.svg";
import mainPhoto from "../../assets/images/girl.webp";
import styled from "styled-components";

export const MainBg = () => {
    return (
        <div className='container'>
            <WrapperBg>
                <StyledMainBg src={mainBg} alt={'This main bg'}/>
                <StyledMainPhoto src={mainPhoto} alt={'This main photo'}/>
            </WrapperBg>
        </div>
    )
}

const WrapperBg = styled.div`

`

const StyledMainBg = styled.img`
  width: 720px;
  height: 629px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;



`

const StyledMainPhoto = styled.img`

  object-fit: cover;
  width: 530px;
  height: 690px;
  position: absolute;
  top: -65px;
  right: -37px;
  z-index: 2;
  border-radius: 0 0 98% 88%;

`