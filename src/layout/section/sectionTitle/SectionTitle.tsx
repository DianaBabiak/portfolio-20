import { S } from "./SectionTitle_Styles.ts";

interface SectionTitlePropsType {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitlePropsType) => {
  return <S.SectionTitle>{title}</S.SectionTitle>;
};
