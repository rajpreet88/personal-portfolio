import React from "react";

import "./style.scss";

const Section = (props) => {
    // {children, id, className, title, background}
    return (
        <div
            id={props.id || ""}
            className={`section ${props.className ? props.className : ""} ${
                props.background === "dark" ? "dark" : "light"
            }`}
        >
            <div className="content">
                {props.title && (
                    <div className="section-title">
                        <h2>{props.title}</h2>
                    </div>
                )}
                {props.children}
            </div>
        </div>
    );
};

export default Section;
