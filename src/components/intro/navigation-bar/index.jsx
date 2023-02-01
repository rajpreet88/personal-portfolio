import React from "react";
import CallToAction from "../../shared/CallToAction";
import logo from "../../../images/Rajpreet.gif";
import { scrollToSection } from "../../utils/helper";

import "./style.scss";

const Navigation = () => {
    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <a
                    href="https://github.com/rajpreet88"
                    target="_blank"
                >
                    <img
                        src={logo}
                        alt="logo"
                    />
                </a>
            </div>
            <div className="navigation">
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("portfolio")}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("blogs")}
                >
                    Blogs & Articles
                </span>
                {/* <span className="navigation-item"></span> */}
                <CallToAction
                    text="Contact me"
                    className="call-to-action"
                    action={() => scrollToSection("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;
