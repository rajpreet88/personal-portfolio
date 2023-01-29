import React from "react";

import "./app.scss";
import Skills from "./components/skills";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
        </div>
    );
};

export default App;
