import React from "react";

import "./style.scss";

const SocialIcon = (props) => {
    // {icon, color, link}
    return (
        <div
            className="social-icon"
            style={{ backgroundColor: props.color }}
            onClick={() => {
                window.open(props.link, "_blank"); //open in new tab
            }}
        >
            {props.icon}
        </div>
    );
};

export default SocialIcon;
