import React from "react";

import hand from "../../../images/hand.png";
import excited from "../../../images/excited3.png";
import CallToAction from "../../shared/CallToAction";
import web3 from "../../../assets/blockchain.svg";
import eth from "../../../assets/eth.svg";
import javascript from "../../../assets/javascript.svg";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt="hand"
                                />
                            </span>
                            <span className="text">, I am </span>
                        </span>
                        <span className="big-text">Preetam</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Explicabo illum, architecto porro magni, illo
                        aliquid unde dolorem aut distinctio neque at, a libero
                        non cum dolorum labore. Impedit, atque obcaecati!
                    </p>
                    <CallToAction text="Get Started" />
                </div>
                <div className="right-col">
                    <img
                        src={excited}
                        alt="excited"
                    />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <img src={web3} />
                        </div>
                        <div className="text">Blockchain Developer</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <img src={javascript} />    
                        </div>
                        <div className="text">MERN Stack Developer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
