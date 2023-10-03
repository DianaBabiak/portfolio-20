import { S } from "./mobileUserPhoto_Styles.ts";
import mainPhoto from "../../../assets/images/girl.webp";

export const MobileUserPhoto = () => {
  return (
      <S.MobileUserPhoto src={mainPhoto} alt={"This main photo"} />
  );
};
