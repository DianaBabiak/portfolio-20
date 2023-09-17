import styled from "styled-components";

interface ImgProjectPropsType{
    imgDiscretion?:string
    imgLink:string
}


export const ImgProject = ({imgDiscretion, imgLink}:ImgProjectPropsType)=>{
    return (
            <StyledImgProject src={imgLink} alt={imgDiscretion||'This is my project'}/>




    )


}


const StyledImgProject = styled.img`
object-fit: cover;
  width: 496px;
  height: 526px

`