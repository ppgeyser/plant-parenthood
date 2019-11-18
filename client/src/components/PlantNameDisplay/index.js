import React from "react";
import style from "./styles.css";

const PlantNameDisplay = props => {
    return (
        <h1 className="plant-name">{props.children}</h1>
    )
}

export default PlantNameDisplay;