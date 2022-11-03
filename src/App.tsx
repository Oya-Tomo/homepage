import React from "react";
import "./App.css";
import TopBar from "./sections/TopBar";
import BackGround from "./sections/BackGround";
import NameSection from "./sections/NameSection";
import IntroSection from "./sections/IntroSection";
import TechSection from "./sections/TechSection";
import DevSection from "./sections/DevSection";

const App: React.FC = () => {
    return (
        <div className="App">
            <TopBar />
            <BackGround />
            <NameSection />
            <IntroSection />
            <TechSection />
            <DevSection />
        </div>
    );
};

export default App;
