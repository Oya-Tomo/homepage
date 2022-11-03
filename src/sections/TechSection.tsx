import React from "react";
import "./TechSection.css";

const TechSection: React.FC = () => {
    return (
        <section className="TechSection">
            <h1 className="TechTitle">Tech</h1>
            <div className="TechItem left">
                <div className="TechText">
                    <h2>Rust</h2>
                    <p>
                        Rust is my favorite programming language. We take
                        advantage of the fast processing speed provided by Rust
                        and use it for code that requires fast processing of
                        heavy processing. Tauri / actix-web / tokio
                    </p>
                </div>
                <div className="TechImage"></div>
            </div>
            <div className="TechItem right">
                <div className="TechText">
                    <h2>Dart</h2>
                    <p>
                        Dart provides a language system that is easy to develop
                        on any platform. It also provides a flexible and safe
                        (eg Null Safety) type system. Flutter [Android / IOS /
                        Web / Desktop]
                    </p>
                </div>
                <div className="TechImage"></div>
            </div>
            <div className="TechItem left">
                <div className="TechText">
                    <h2>TypeScript</h2>
                    <p>
                        TypeScript is a language that adds types to JavaScript
                        to improve development efficiency in the IDE. It is a
                        very popular and convenient language with many libraries
                        such as NPM, and a local operating environment such as
                        Node.js and Deno. React / Electron
                    </p>
                </div>
                <div className="TechImage"></div>
            </div>
            <div className="TechItem right">
                <div className="TechText">
                    <h2>C++</h2>
                    <p>
                        It uses lower layers of C++ and faster processing speed,
                        and is used when accessing embedded and OS APIs. Robot
                        Controlling / Mbed OS
                    </p>
                </div>
                <div className="TechImage"></div>
            </div>
        </section>
    );
};

export default TechSection;
