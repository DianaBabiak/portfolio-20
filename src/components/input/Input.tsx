import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

interface InputPropsType{
    type: 'email' | 'textarea' | 'text';
}

export const Input =({type}:InputPropsType)=>{
    if (type==='textarea'){
      return(
          <TextareaField as="textarea"></TextareaField>
      )
    } return (
        <Field type={type}></Field>
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
  padding: 10px;
  &:hover {
    border: 1px solid ${Theme.colors.accent};
  }
  &:focus {
    outline-color: ${Theme.colors.accent};
  }
  
  @media ${Theme.media.mobile}{
    width: 250px;
  }
  
  
`;
const TextareaField = styled(Field)`
  resize: none;
  height: 160px;
`;