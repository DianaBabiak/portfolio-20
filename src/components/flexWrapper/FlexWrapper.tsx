import styled from "styled-components";


interface FlexWrapperPropsType{
    direction?:string
    justify?:string
    align?:string
    wrap?: string
    height?:string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction:${(props:FlexWrapperPropsType) =>props.direction || 'row'};
  justify-content:${(props:FlexWrapperPropsType) =>props.justify || 'flex-start'} ;
  align-items:${props =>props.align ||'stretch'} ;
  flex-wrap: ${props => props.wrap || 'nowrap'};
  height: ${props => props.height || '100vh'};
`