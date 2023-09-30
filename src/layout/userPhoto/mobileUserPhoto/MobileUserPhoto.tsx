import mainPhoto from "../../../assets/images/girl_(1)-transformed_(1)-transformed.png";
import {S} from "./mobileUserPhoto_Styles.ts";


export const MobileUserPhoto = () => {
  return (
        <S.MobileUserPhoto src={mainPhoto} alt={"This main photo"} />
  );
};