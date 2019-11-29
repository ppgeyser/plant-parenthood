import React from "react";

const Button = props => {
    return (
        <button className="rounded" onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;