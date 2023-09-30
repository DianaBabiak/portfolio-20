import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

const Footer = styled.footer`
  background-image: url("../../../src/assets/images/footer.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  
  
`;

const SmallText = styled.small`
  color: ${Theme.colors.secondaryText};
  font-size: 16px;
`;


export const S = {
    Footer,
    SmallText

}