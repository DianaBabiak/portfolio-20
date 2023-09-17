import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {ButtonLink} from "../../../components/buttonLink/ButtonLink.tsx";
import {Button} from "../../../components/button/Button.tsx";


export const Contacts = () => {

    return (
        <StyledContacts>
            <SectionTitle title={'Contact me'}/>
            <StyledForm>
                <Label htmlFor={'Name'}>Name</Label>
                <Field id={'Name'} type={"text"}></Field>

                <Label htmlFor={'email'}>Email</Label>
                <Field id ={'email'} type={"email"}></Field>

                <Label htmlFor={'message'}>Message</Label>
                <Field id={'message'} as ="textarea"/>

               <Button type={"submit"}>Send</Button>


            </StyledForm>

        </StyledContacts>
    )
}


const StyledContacts = styled.section`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;




`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  width: 30%;

`


const Field = styled.input`
   

`

const Label = styled.label`



`

