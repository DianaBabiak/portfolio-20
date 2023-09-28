import mainBackground from "../../assets/images/webstorm.svg";
import mainPhoto from "../../assets/images/girl_(1)-transformed_(1)-transformed.png";
import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

export const MobileUserPhoto = () => {
  return (
        <StyledUserPhoto src={mainPhoto} alt={"This main photo"} />
  );
};



const StyledUserPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height: 496px;
  display: none;
  margin-bottom: 10px;
  
  @media ${Theme.media.tablet}{
    display: block;
    



  }
 
`;
