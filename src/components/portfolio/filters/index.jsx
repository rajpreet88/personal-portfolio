import React, { useState } from "react";
import filtersData from "../../shared/constants/filtersData";

import "./style.scss";

const Filters = (props) => {
    //{filterProjects}
    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
        props.filterProjects(id);
    };

    return (
        <ul className="filter-menu-items">
            {filtersData.map((item, index) => {
                return (
                    <li
                        className={`filter-menu-item ${
                            active === item.id ? "active" : ""
                        }`}
                        key={item.id}
                        onClick={() => clickHandler(item.id)}
                    >
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default Filters;
