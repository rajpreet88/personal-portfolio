import React from "react";

import "./style.scss";

import ArrowIcon from "../../shared/ArrowIcon";

const BlogCard = (props) => {
    // {user, date, image, title, description }
    return (
        <div className="blog-card">
            <div className="image-section">
                <img
                    src={props.image}
                    alt={props.title}
                />
            </div>
            <div className="content-section">
                <div className="info-bar">
                    <div className="user-name">{props.user}</div>
                    <div className="posted-date">{props.date}</div>
                </div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="readmore-cta">
                    <span className="text">Read More</span>
                    <ArrowIcon className="arrow-icon" />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
