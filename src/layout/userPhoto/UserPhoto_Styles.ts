import styled from "styled-components";
import { Theme } from "../../styles/Theme.ts";

const UserPhotoWrapper = styled.div`
  overflow: hidden;
  
`;

const BackgroundUserPhoto = styled.img`
  width: 777px;
  height: 877px;
  object-fit: cover;
  position: relative;
  top: -248px;
  left: 57px;

  
`;

const UserPhoto = styled.img`
  object-fit: cover;
  width: 250px;
  height: 250px;
 
  
  border-radius: 50%;

  @media ${Theme.media.tablet} {
    width: 564px;
    margin: 60px 0 10px;
    top: -115px;
    right: -38px;
    border-radius: 0 0 47% 45%/0 0 89% 100%;
  }
  @media ${Theme.media.mobile} {
    top: -112px;
    right: -92px;
    border-radius: 0 0 85% 45%/0 0 89% 100%;
  }
`;

export const S = {
  BackgroundUserPhoto,
  UserPhoto,
  UserPhotoWrapper,
};
