import React from "react";

import "./style.scss";

import backgroundForm from "../../../images/BackgroundForm.png";
import { MdPhone, MdEmail } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would happy to answer any questions you may have on Full Stack
                Web Development(MERN) and Blockchain Technology.
            </h4>
            <div className="contact-option">
                <MdPhone />
                <span className="text">+91 9874563210</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <a
                    href="https://www.google.co.in"
                    target="_blank"
                >
                    <span className="email">fullstackweb3maverick@gmail.com</span>
                </a>
            </div>
            <div className="div-bg1">
                <img
                    src={backgroundForm}
                    className="bg1"
                />
                <img
                    src={backgroundForm}
                    className="bg2"
                />
            </div>
        </div>
    );
};

export default ContactInfo;
