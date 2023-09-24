import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";


interface SocialLinkListPropsType {
    contactMessengers: {
        iconId: string
        height: string
        width: string
        viewBox: string
        url: string
    }[]

}

export const MessengersLinkList =({contactMessengers}:SocialLinkListPropsType)=>{
    return(
        <FlexWrapper justify={"center"} align={"center"}>
        <StyledSocialLinkList>
            {contactMessengers.map((item) => {
                return (
                    <SocialItem key={item.iconId}>

                        <IconLink href={item.url}>
                            <Icon
                                iconId={item.iconId}
                                height={item.height}
                                width={item.width}
                                viewBox={item.viewBox}/>
                        </IconLink>
                    </SocialItem>
                );
            })}

        </StyledSocialLinkList>
        </FlexWrapper>
    )

}

const StyledSocialLinkList = styled.ul`
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

  &:hover {
    transform: scale(1.2);;
  }
`;

const IconLink = styled.a`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;