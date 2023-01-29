import React from "react";

import Skills from "./components/skills";
import "./app.scss";
import Intro from "./components/intro";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
        </div>
    );
};

export default App;
