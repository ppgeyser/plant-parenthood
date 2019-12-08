import React from "react";

const Button = props => {
    return (
        <button className="rounded" style={props.style} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;