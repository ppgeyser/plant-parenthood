import React from "react";

const ImgThumbnail = props => {
    return (
        <img
        src={props.src}
        alt={props.alt}
        style={{
            width: `${props.width}%`
        }}
        ></img>
    )
}

export default ImgThumbnail;