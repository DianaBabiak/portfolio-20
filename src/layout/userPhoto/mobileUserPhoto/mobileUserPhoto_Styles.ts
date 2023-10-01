import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const MobileUserPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height: 546px;
  display: none;
  margin: 60px 0 10px;
  
  @media ${Theme.media.tablet}{
    display: block;
  }
 
`;
export const S={
    MobileUserPhoto
}