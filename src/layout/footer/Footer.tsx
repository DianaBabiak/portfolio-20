import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {Theme} from "../../styles/Theme.ts";
import {StyledContainer} from "../../components/styledContainer/StyledContainer.ts";
import {MessengersLinkList, SocialLinkList} from "../../components/messengersLinkList/MessengersLinkList.tsx";
import {CONSTANT} from "../../constant/constant.ts";


export const Footer = () => {

    return (
        <StyledFooter>
            <StyledContainer>
                <FlexWrapper
                    direction={"column"}
                    justify={"center"}
                    align={"center"}
                    padding={"0 0 150px 0"}
                >
                    <MessengersLinkList contactMessengers={CONSTANT.contactMessengers}/>
                    <StyledText>Dziana Babiak 2023</StyledText>
                </FlexWrapper>
            </StyledContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-image: url("../../../src/assets/images/footer.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
`;

const StyledText = styled.small`
  color: ${Theme.colors.secondaryText};
  font-size: 16px;
`;

