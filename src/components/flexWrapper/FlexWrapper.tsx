import styled from "styled-components";
import { Theme } from "../../styles/Theme.ts";

interface FlexWrapperPropsType {
  direction?: string;
  adaptiveDirection?:string;
  justify?: string;
  adaptiveJustify?: string;
  adaptiveAlign?: string;
  align?: string;
  wrap?: string;
  height?: string;
  gap?: string;
  margin?: string;
  padding?: string;
  adaptivePadding?:string
  width?:string
  adaptiveWidth?:string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props: FlexWrapperPropsType) => props.direction ?? "row"};
  justify-content: ${(props: FlexWrapperPropsType) =>
    props.justify ?? "flex-start"};
  align-items: ${(props) => props.align ?? "stretch"};
  flex-wrap: ${(props) => props.wrap ?? "nowrap"};
  height: ${(props) => props.height ?? "auto"};
  gap: ${(props) => props.gap ?? "none"};
  margin: ${(props) => props.margin ?? "0"};
  padding: ${(props) => props.padding ?? "0"};
  width:${(props) => props.width ?? "auto"}; 

  @media ${Theme.media.tablet}{
    flex-direction: ${(props: FlexWrapperPropsType) => props.adaptiveDirection ?? props.direction??"row"};
    justify-content: ${(props: FlexWrapperPropsType) =>
        props.adaptiveJustify ?? props.justify ??"flex-start"};
    align-items: ${(props) => props.adaptiveAlign ??  props.align ?? "stretch"};
    padding: ${(props) => props.adaptivePadding ?? "0"};
    width: ${(props) => props.adaptiveWidth ?? "auto"};
  


  }
`;
