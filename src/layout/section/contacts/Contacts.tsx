import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {ButtonLink} from "../../../components/buttonLink/ButtonLink.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {ContactField} from "../../../components/contactField/ContactField.tsx";


export const Contacts = () => {

    return (
        <StyledContacts>
            <div className='container'>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle title={'Contact me'}/>

                    <StyledForm>
                        <ContactField title={'Name'} type={'text'}/>
                        <ContactField title={'Email'} type={'Email'}/>
                        <ContactField title={'Message'} type={'textarea'}/>
                        <Button type={"submit"}>Send</Button>


                    </StyledForm>
                </FlexWrapper>

            </div>
        </StyledContacts>
    )
}


const StyledContacts = styled.section`
  margin-bottom: 74px;




`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 80px;
  align-items: flex-end;

`


