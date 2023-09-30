import {SectionTitle} from "../sectionTitle/SectionTitle.tsx";
import {Button} from "../../../components/Button.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {ContactField} from "./contactField/ContactField.tsx";
import {GeneralContainer} from "../../../components/GeneralContainer.ts";
import {SectionWrapper} from "../sectionWrapper/SectionWrapper.ts";
import {S} from "./Contacts_Styles.ts";

export const Contacts = () => {
    return (
        <SectionWrapper>
            <GeneralContainer>
                <FlexWrapper direction={"column"} align={"center"} justify={'center'} width={'100%'}>
                    <SectionTitle title={"Contact me"}/>

                    <S.Form>
                        <ContactField title={"Name"} type={"text"}/>
                        <ContactField title={"Email"} type={"email"}/>
                        <ContactField title={"Message"} type={"textarea"}/>
                        <Button type={"submit"}>Send</Button>
                    </S.Form>
                </FlexWrapper>
            </GeneralContainer>
        </SectionWrapper>
    );
};



