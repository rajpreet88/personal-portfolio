import React from "react";

import ArrowIcon from "../../shared/ArrowIcon";
import "./style.scss";

const Showcase = (props) => {
    //{data, transition}

    // console.log(props.data);
    return (
        <div className="projects-showcase">
            {props.data.map((project) => {
                // console.log(project);
                return (
                    <div
                        className={`showcase-item ${
                            props.transition === "zoomout"
                                ? "zoomOut"
                                : props.transition === "zoomin"
                                ? "zoomIn"
                                : ""
                        }`}
                        key={project.name}
                    >
                        <div className="meta-content">
                            <h5>{project.name}</h5>
                            <div className="go-to-cta">
                                <span className="text">Project Details...</span>
                                <ArrowIcon className="arrow-icon" />
                            </div>
                        </div>
                        <img src={project.media.thumbnail} />
                    </div>
                );
            })}
        </div>
    );
};

export default Showcase;
