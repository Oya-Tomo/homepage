import React from "react";
import HeaderCSS from "./Header.module.css";

const IntroHeader: React.FC = () => {
    return (
        <header className={HeaderCSS["IntroHeader"]}>
            <div className={HeaderCSS["IntroHeaderButton"]}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default IntroHeader;
