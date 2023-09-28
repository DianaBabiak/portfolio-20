import mainBackground from "../../assets/images/webstorm.svg";
import mainPhoto from "../../assets/images/girl.webp";
import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

export const UserPhoto = () => {
  return (
      <div>
        <StyledBackgroundUserPhoto src={mainBackground} alt={"This is background main photo"} />
        <StyledUserPhoto src={mainPhoto} alt={"This main photo"} />
      </div>
  );
};



const StyledBackgroundUserPhoto = styled.img`
  width: 803px;
  height: 698px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right:0;
  z-index: -1;

  @media ${Theme.media.tablet}{
display: none;

    
  }
`;

const StyledUserPhoto = styled.img`
  object-fit: cover;
  width: 606px;
  height: 819px;
  position: absolute;
  top: -115px;
  right: 0;
  z-index: 2;
  border-radius: 0 0 47% 53%/0 0 49% 94%;

  @media ${Theme.media.tablet}{
    display: none;



  }
 
`;
