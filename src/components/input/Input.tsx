import {S} from "./Input_Styles.ts";

interface InputPropsType{
    type: 'email' | 'textarea' | 'text';
}

export const Input =({type}:InputPropsType)=>{
    if (type==='textarea'){
      return(
          <S.TextareaField as="textarea"></S.TextareaField>
      )
    } return (
        <S.Field type={type}></S.Field>
    )
}

