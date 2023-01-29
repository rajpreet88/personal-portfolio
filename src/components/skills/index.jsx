import React from "react";

import Section from "../shared/Section";
import "./style.scss";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="Full-Stack"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis sed minima optio ratione numquam impedit,
                        laborum asperiores esse quia sequi quidem qui
                        necessitatibus assumenda perspiciatis obcaecati id
                        provident sint laudantium.
                    </p>
                    <CallToAction text="Download CV"
                    icon={AiOutlineCloudDownload} />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
