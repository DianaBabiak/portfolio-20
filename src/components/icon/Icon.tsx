import iconSprite from "../../assets/images/icon-sprite.svg"
interface IconPropsType {
    iconId:string
    width?:string
    height?:string
    viewBox?:string
}

export const Icon =({iconId, width,height,viewBox}:IconPropsType)=>{
    return (
        <svg   width={width|| "120"} height={height|| "120"} viewBox={viewBox||"0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${iconId}`}></use>
        </svg>

    )
}

