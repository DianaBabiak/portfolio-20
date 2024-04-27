import { FlexWrapper } from "../../components/FlexWrapper.ts";
import { GeneralContainer } from "../../components/GeneralContainer.ts";
import { MessengersLinkList } from "../../components/messengersLinkList/MessengersLinkList.tsx";
import { S } from "./Footer_Styles.ts";
import { CONTACT_MESSENGERS } from "../../constant/constant.ts";

export const Footer = () => {
  return (
    <S.Footer>
      <GeneralContainer>
        <FlexWrapper
          direction={"column"}
          justify={"center"}
          align={"center"}
          padding={"0 0 150px 0"}
        >
          <MessengersLinkList contactMessengers={CONTACT_MESSENGERS} />
          <S.SmallText>Dziana Babiak 2024</S.SmallText>
        </FlexWrapper>
      </GeneralContainer>
    </S.Footer>
  );
};
