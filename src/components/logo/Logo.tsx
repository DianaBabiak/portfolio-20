import { Icon } from "../icon/Icon.tsx";
import { FlexWrapper } from "../flexWrapper/FlexWrapper.tsx";
import styled from "styled-components";
import { Theme } from "../../styles/Theme.ts";

export const Logo = () => {
  return (
      <FlexWrapper justify={"center"} align={"center"} margin={'10px 0'} gap='4px'>
        <Icon
          iconId={"logo"}
          height={"50px"}
          width={"50px"}
          viewBox={"0 0 50 50"}
        />
        <StyledLogoTitle>Dziana Babiak</StyledLogoTitle>
      </FlexWrapper>
  );
};

const StyledLogoTitle = styled.span`
  color: ${Theme.colors.primaryText};
  font-family: Comfortaa, cursive;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%
`;
