import React from "react";

import ArrowIcon from "../ArrowIcon";
import "./style.scss";

const CallToAction = (props) => {
    return (
        <div className="call-to-action">
            <span className="text">{props.text}</span>
            <ArrowIcon />
        </div>
    );
};

export default CallToAction;
