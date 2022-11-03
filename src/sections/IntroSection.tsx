import React from "react";
import "./IntroSection.css";

const IntroSection: React.FC = () => {
    return (
        <section className="IntroSection">
            <h1 className="IntroTitle">Introduction</h1>
            <ul className="IntroList">
                <li>NITIC Robotics Team Member</li>
                <li>I Love Programing</li>
            </ul>
        </section>
    );
};

export default IntroSection;
