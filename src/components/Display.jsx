import React from "react";
import "./Display.css"

export default props => 
    <div className="display">
        <div className="opera">{props.valueOpera}</div>
        <div className="atual">{props.value}</div>
    </div>