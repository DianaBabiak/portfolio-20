import styled from "styled-components";
import { FlexWrapper } from "../flexWrapper/FlexWrapper.tsx";
import { Theme } from "../../styles/Theme.ts";
import {Input} from "../input/Input.tsx";

interface ContactFieldPropsType {
  title: string;
  type: 'email' | 'textarea' | 'text';
}
export const ContactField = ({ title, type }: ContactFieldPropsType) => {
    return (
      <FlexWrapper direction={"column"} gap={"5px"} align={"flex-start"}>
        <Label htmlFor={title}>{title}</Label>
        <Input type={type} id={title}/>
      </FlexWrapper>
    );
  };



const Label = styled.label`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
