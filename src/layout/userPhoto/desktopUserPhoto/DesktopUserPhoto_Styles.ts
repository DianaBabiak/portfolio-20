import styled from "styled-components";
import { Theme } from "../../../styles/Theme.ts";

const UserPhotoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const BackgroundUserPhoto = styled.img`
  width: 660px;
  height: 574px;
  object-fit: cover;
  position: relative;
  top: 0;
  left: 0;

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const UserPhoto = styled.img`
  object-fit: cover;
  width: 501px;
  height: 683px;
  position: absolute;
  top: -99px;
  right: 0;
  border-radius: 0 0 45% 54%/0 0 69% 99%;

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

export const S = {
  BackgroundUserPhoto,
  UserPhoto,
  UserPhotoWrapper,
};
