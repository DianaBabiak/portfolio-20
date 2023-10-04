import mainBackground from "../../assets/images/yellow-bg.svg";
import mainPhoto from "../../assets/images/girl.webp";
import { S } from "./UserPhoto_Styles.ts";
import { ProjectsAnchors } from "../../constant/constant.ts";

export const UserPhoto = () => {
  return (
    <S.UserPhotoWrapper id={ProjectsAnchors.Home}>
      <S.BackgroundUserPhoto
        src={mainBackground}
        alt={"This is background main photo"}
      />
      <S.UserPhoto src={mainPhoto} alt={"This main photo"} />
    </S.UserPhotoWrapper>
  );
};
