import styled from "styled-components";
import { Theme } from "../../styles/Theme.ts";

const SocialLinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 34px;
`;

const SocialItem = styled.li`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${Theme.animation.transition};

  &:hover {
    transform: scale(1.2);
  }
`;

const IconLink = styled.a`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const S = {
  SocialLinkList,
  SocialItem,
  IconLink,
};
