import mainBackground from "../../../assets/images/webstorm.svg";
import mainPhoto from "../../../assets/images/girl.webp";
import {S} from "./DesktopUserPhoto_Styles.ts";

export const DesktopUserPhoto = () => {
  return (
      <S.UserPhotoWrapper>
        <S.BackgroundUserPhoto src={mainBackground} alt={"This is background main photo"} />
        <S.UserPhoto src={mainPhoto} alt={"This main photo"} />
      </S.UserPhotoWrapper>
  );
};


