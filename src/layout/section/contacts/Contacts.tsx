import { SectionTitle } from "../sectionTitle/SectionTitle.tsx";
import { Button } from "../../../components/Button.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { ContactField } from "./contactField/ContactField.tsx";
import { GeneralContainer } from "../../../components/GeneralContainer.ts";
import { SectionWrapper } from "../sectionWrapper/SectionWrapper.ts";
import { S } from "./Contacts_Styles.ts";
import { ProjectsAnchors } from "../../../constant/constant.ts";
import emailjs from "@emailjs/browser";
import { ElementRef, useRef } from "react";

export const Contacts = () => {
  const form = useRef<ElementRef<"form"> | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tx0vwzw",
        "template_edig7wj",
        form.current ?? "",
        "6Vb-6zq8NphCJFjhx",
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        e.target.reset();
      });
  };
  return (
    <SectionWrapper id={ProjectsAnchors.Contacts}>
      <GeneralContainer>
        <FlexWrapper
          direction={"column"}
          align={"center"}
          justify={"center"}
          width={"100%"}
        >
          <SectionTitle title={"Contact me"} />

          <S.Form ref={form} onSubmit={sendEmail}>
            <ContactField title={"Name"} type={"text"} name={"user_name"} />
            <ContactField title={"Email"} type={"email"} name={"user_email"} />
            <ContactField
              title={"Message"}
              type={"textarea"}
              name={"message"}
            />
            <Button type={"submit"}>Send</Button>
          </S.Form>
        </FlexWrapper>
      </GeneralContainer>
    </SectionWrapper>
  );
};
