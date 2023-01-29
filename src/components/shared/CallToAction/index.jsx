import React from "react";

import ArrowIcon from "../ArrowIcon";
import "./style.scss";

const CallToAction = (props) => {
    // {text, icon, action}
    return (
        <div className="call-to-action">
            <span className="text">{props.text}</span>
            {props.icon ? (
                <div className="icon">{props.icon}</div>
            ) : (
                <ArrowIcon className="arrow-icon" />
            )}
        </div>
    );
};

export default CallToAction;
