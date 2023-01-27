import React from "react";
import CallToAction from "../../shared/CallToAction";
import logo from "../../../images/Rajpreet.gif";

import "./style.scss";

const Navigation = () => {
    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="logo"
                />
            </div>
            <div className="navigation">
                <span className="navigation-item">Skills</span>
                <span className="navigation-item">Portfolio</span>
                <span className="navigation-item">Blogs & Articles</span>
                {/* <span className="navigation-item"></span> */}
                <CallToAction text="Contact me"/>
            </div>
        </div>
    );
};

export default Navigation;
