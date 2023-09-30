import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../FlexWrapper.ts";
import {S} from "./MessengersLinkList_Styles.ts";


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
        <S.SocialLinkList>
            {contactMessengers.map((item) => {
                return (
                    <S.SocialItem key={item.iconId}>

                        <S.IconLink href={item.url}>
                            <Icon
                                iconId={item.iconId}
                                height={item.height}
                                width={item.width}
                                viewBox={item.viewBox}/>
                        </S.IconLink>
                    </S.SocialItem>
                );
            })}

        </S.SocialLinkList>
        </FlexWrapper>
    )

}

