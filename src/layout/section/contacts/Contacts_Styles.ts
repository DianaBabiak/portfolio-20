import styled from "styled-components";
import { Theme } from "../../../styles/Theme.ts";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
  align-items: stretch;
  max-width: 400px;
  width: 100%;

  @media ${Theme.media.mobile} {
    margin-top: 30px;
  }
`;
const Label = styled.label`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const S = {
  Form,
  Label,
};
