import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

export const Logo = () => {
    return (
        <StyledLogo>
            <FlexWrapper justify={'center'} align={'center'}>
                <Icon iconId={"logo"} height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'}/>
                <StyledLogoTitle>Dziana Babiak</StyledLogoTitle>
            </FlexWrapper>

        </StyledLogo>
    )

}

const StyledLogo = styled.div`
padding: 10px 0;
`

const StyledLogoTitle = styled.span`
  color: var(--font-high-emphasis, ${Theme.colors.primaryText});
  font-family: 'Comfortaa', cursive;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 32.4px */

`