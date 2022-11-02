import React from "react";
import "./App.css";

import IntroHeader from "./sections/Header";
import Name from "./sections/Name";
import Info from "./sections/Info";

const App: React.FC = () => {
    return (
        <div className="App">
            <IntroHeader></IntroHeader>
            <Name></Name>
            <Info></Info>
        </div>
    );
};

export default App;
