import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

const Field = styled.input`
  width: 100%;
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
  
  
  
`;
const TextareaField = styled(Field)`
  resize: none;
  height: 160px;
`;


export const S = {
    Field,
    TextareaField
}