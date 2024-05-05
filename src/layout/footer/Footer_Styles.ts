import styled from "styled-components";
import { Theme } from "../../styles/Theme.ts";
import footerImg from "../../../public/assets/footer.webp";

const Footer = styled.footer`
  background-image: url(${footerImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  position: relative;
  z-index: 999;
  margin-top: 74px;

`;

const SmallText = styled.small`
  color: ${Theme.colors.secondaryText};
  font-size: 16px;
  padding: 30px 0;

  @media ${Theme.media.tablet} {
    padding: 30px 0;
  }
`;

export const S = {
  Footer,
  SmallText,
};
