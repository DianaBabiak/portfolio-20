import mainBackground from "../../assets/images/webstorm.svg";
import mainPhoto from "../../assets/images/girl.webp";
import styled from "styled-components";

export const UserPhoto = () => {
  return (
      <div>
        <StyledBackgroundUserPhoto src={mainBackground} alt={"This is background main photo"} />
        <StyledUserPhoto src={mainPhoto} alt={"This main photo"} />
      </div>
  );
};



const StyledBackgroundUserPhoto = styled.img`
  width: 720px;
  height: 629px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const StyledUserPhoto = styled.img`
  object-fit: cover;
  width: 530px;
  height: 690px;
  position: absolute;
  top: -60px;
  right: -37px;
  z-index: 2;
  border-radius: 0 0 60% 45%/0 0 54% 73%;
 
`;
