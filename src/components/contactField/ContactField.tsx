import styled from "styled-components";
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.ts";



interface ContactFieldPropsType{
    title:string
    type:string
}
export const ContactField = ({title, type}:ContactFieldPropsType)=>{
    if (type==="textarea"){
       return (
           <FlexWrapper direction={'column'} gap={'5px'} align={'flex-start'}>
               <Label htmlFor={title}>{title}</Label>
               <TextareaField id={title} as ="textarea"></TextareaField>
           </FlexWrapper>
       )} return (
                <FlexWrapper direction={'column'} gap={'5px'} align={'flex-start'}>
                    <Label htmlFor={title}>{title}</Label>
                    <Field id={title} type={type}></Field>
                </FlexWrapper>
            )
}







const Field = styled.input`
  
  width: 400px;
  height: 40px;
  background: ${Theme.colors.secondaryBg};
  border-radius: 8px;
  border: 1px solid ${Theme.colors.secondaryBorder};
  color: ${Theme.colors.secondaryText};
  font-size: 18px;
  padding: 0 10px;
  &:hover{
    border: 1px solid ${Theme.colors.accent}
  }
  &:focus {
    outline-color: ${Theme.colors.accent};
  }
  
  



`
const TextareaField=styled(Field)`
  resize: none;
  height: 160px;
 

`
const Label = styled.label`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;


`


