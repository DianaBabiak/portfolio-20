import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

export const SectionWrapper = styled.section`
  margin-bottom: 74px;
  
  @media ${Theme.media.tablet}{
    margin-bottom: 50px;
  }
  @media ${Theme.media.mobile}{
    margin-bottom: 30px;
  }
`