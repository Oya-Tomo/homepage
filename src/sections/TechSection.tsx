import React from "react";
import "./TechSection.css";
import { SiRust, SiDart, SiTypescript, SiCplusplus } from "react-icons/si";

const TechSection: React.FC = () => {
    return (
        <section className="TechSection">
            <h1 className="TechTitle SectionTitleSize">Tech</h1>
            <div className="TechItem">
                <h2 className="SectionSubTitleSize">
                    {<SiRust color="#b7410e" />} Rust
                </h2>
                <p className="SectionTextSize">
                    Rust is my favorite programming language. We take advantage
                    of the fast processing speed provided by Rust and use it for
                    code that requires fast processing of heavy processing.
                    Tauri / actix-web / tokio
                </p>
            </div>
            <div className="TechItem">
                <h2 className="SectionSubTitleSize">
                    {<SiDart color="#168afd" />} Dart
                </h2>
                <p className="SectionTextSize">
                    Dart provides a language system that is easy to develop on
                    any platform. It also provides a flexible and safe (eg Null
                    Safety) type system. Flutter [Android / IOS / Web / Desktop]
                </p>
            </div>
            <div className="TechItem">
                <h2 className="SectionSubTitleSize">
                    {<SiTypescript color="#3178c6" />} TypeScript
                </h2>
                <p className="SectionTextSize">
                    TypeScript is a language that adds types to JavaScript to
                    improve development efficiency in the IDE. It is a very
                    popular and convenient language with many libraries such as
                    NPM, and a local operating environment such as Node.js and
                    Deno. React / Electron
                </p>
            </div>
            <div className="TechItem">
                <h2 className="SectionSubTitleSize">
                    {<SiCplusplus color="#2255de" />} C++
                </h2>
                <p className="SectionTextSize">
                    It uses lower layers of C++ and faster processing speed, and
                    is used when accessing embedded and OS APIs. Robot
                    Controlling / Mbed OS
                </p>
            </div>
        </section>
    );
};

export default TechSection;
