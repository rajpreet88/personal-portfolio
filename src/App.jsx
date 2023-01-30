import React from "react";

import "./app.scss";
import Skills from "./components/skills";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
        </div>
    );
};

export default App;
