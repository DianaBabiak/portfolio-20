import { S } from "./Input_Styles.ts";

interface InputPropsType {
  type: "email" | "textarea" | "text";
  id: string;
  name: string;
}

export const Input = ({ type, id, name }: InputPropsType) => {
  if (type === "textarea") {
    return (
      <S.TextareaField
        required
        as="textarea"
        id={id}
        name={name}
      ></S.TextareaField>
    );
  }
  return <S.Field required type={type} id={id} name={name}></S.Field>;
};
