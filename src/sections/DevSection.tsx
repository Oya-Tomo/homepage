import React from "react";
import "./DevSection.css";

const DevSection: React.FC = () => {
    return (
        <section className="DevSection">
            <h1 className="DevTitle">Development</h1>
            <div className="DevItem">
                <h2>Text Editor</h2>
                <p>
                    I have a passion for developing my own text editor. Recent
                    editors are getting faster and faster, but I have a desire
                    to realize high-speed editing with CLI like Vim, so I'm
                    working on development little by little.
                </p>
            </div>
            <div className="DevItem">
                <h2>Mobile Apps</h2>
                <p>
                    Using Flutter and Kotlin, I am developing a little
                    convenient application that I use in my life. (Markdown
                    notepad, Todo app)
                </p>
            </div>
            <div className="DevItem">
                <h2>Robot Controlling</h2>
                <p>
                    I am in charge of robot control in Nitic's robotics team. I
                    usually write control code targeting Mbed OS in C++.
                </p>
            </div>
        </section>
    );
};

export default DevSection;
