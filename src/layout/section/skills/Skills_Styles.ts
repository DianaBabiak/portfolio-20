import styled from "styled-components";
import { Theme } from "../../../styles/Theme.ts";

const WrapperIcon = styled.div`
  width: 100%;
  margin-top: 74px;
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-auto-rows: 120px;
  gap: 74px 0;
  justify-content: space-between;
  align-content: space-between;

  @media ${Theme.media.tablet} {
    grid-template-columns: repeat(4, auto);
  }

  @media ${Theme.media.mobile} {
    grid-template-columns: repeat(2, auto);
    justify-content: space-around;
  }
`;

export const S = {
  WrapperIcon,
};
