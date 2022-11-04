import React from "react";
import "./IntroSection.css";

const IntroSection: React.FC = () => {
    return (
        <section className="IntroSection">
            <h1 className="IntroTitle SectionTitleSize">Introduction</h1>
            <ul className="IntroList SectionTextSize">
                <li>NITIC Robotics Team Member</li>
                <li>I Love Programing</li>
            </ul>
        </section>
    );
};

export default IntroSection;
