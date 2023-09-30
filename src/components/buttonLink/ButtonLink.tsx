import {S} from "./ButtonLink_styles.ts";

export interface ButtonLinkPropsType {
  label: string;
  link: string;
  type: "primary" | "outline";
  size: "medium" | "large"
}

export const ButtonLink = ({label, link, type, size }: ButtonLinkPropsType) => {
  return (
    <S.ButtonLink type={type} href={link} size={size}>
      {label}
    </S.ButtonLink>
  );
};
