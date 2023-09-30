import { FlexWrapper } from "../../../../components/FlexWrapper.ts";
import {Input} from "../../../../components/input/Input.tsx";
import {S} from "../Contacts_Styles.ts";

interface ContactFieldPropsType {
  title: string;
  type: 'email' | 'textarea' | 'text';
}
export const ContactField = ({ title, type }: ContactFieldPropsType) => {
    return (
      <FlexWrapper direction={"column"} gap={"5px"} align={"flex-start"} justify={'center'} width={'100%'}>
        <S.Label htmlFor={title}>{title}</S.Label>
        <Input type={type} id={title}/>
      </FlexWrapper>
    );
  };




