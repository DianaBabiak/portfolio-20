import {S} from "./Input_Styles.ts";

interface InputPropsType{
    type: 'email' | 'textarea' | 'text';
    id:string
}

export const Input =({type, id}:InputPropsType)=>{
    if (type==='textarea'){
      return(
          <S.TextareaField as="textarea" id={id} ></S.TextareaField>
      )
    } return (
        <S.Field type={type} id={id}></S.Field>
    )
}

