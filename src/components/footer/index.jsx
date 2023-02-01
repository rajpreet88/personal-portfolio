import React from "react";

import "./style.scss";
import Section from "../shared/Section";
import logo from "../../images/Rajpreet.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helper";

import {
    FaYoutube,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={logo}
                        alt="logo"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blogs
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </li>
                </ul>
            </div>
            <div className="social-icons">
                <SocialIcon
                    color="#FF0000"
                    icon={<FaYoutube />}
                    link="https://www.youtube.com"
                />
                <SocialIcon
                    color="#0D2636"
                    icon={<FaGithub />}
                    link="https://github.com/rajpreet88"
                />
                <SocialIcon
                    color="#0A66C2"
                    icon={<FaLinkedin />}
                    link="https://github.com/rajpreet88"
                />
                <SocialIcon
                    color="#C13584"
                    icon={<FaInstagram />}
                    link="https://github.com/rajpreet88"
                />
                <SocialIcon
                    color="#1DA1F2"
                    icon={<FaTwitter />}
                    link="https://github.com/rajpreet88"
                />
                <SocialIcon
                    color="#0088cc"
                    icon={<FaTelegramPlane />}
                    link="https://github.com/rajpreet88"
                />
            </div>
            <div className="bottom-bar">
                <div className="copyright-text">
                    <p> &#169; 2023 RajPreet | All Rights Reserved</p>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
