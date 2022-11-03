import React from "react";
import "./TopBar.css";
import MyIcon from "../assets/icon.svg";

const TopBar: React.FC = () => {
    return (
        <header className="TopBar">
            <div className="MyIconContainer">
                <img className="MyIcon" src={MyIcon} alt="" />
            </div>
        </header>
    );
};

export default TopBar;
