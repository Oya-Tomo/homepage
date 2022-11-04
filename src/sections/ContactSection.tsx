import React from "react";
import "./ContactSection.css";

import { BsGithub, BsTwitter } from "react-icons/bs";

const ContactSection: React.FC = () => {
    return (
        <section className="ContactSection">
            <h1 className="ContactTitle">Contacts</h1>
            <div className="ContactList">
                {/* <a href="https://github.com/Oya-Tomo"></a>
                <a href="https://twitter.com/OyaTomo_dev"></a> */}
                <a
                    href="https://github.com/Oya-Tomo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="IconContainer">
                        <BsGithub color="#171515" />
                    </div>
                </a>
                <a
                    href="https://twitter.com/OyaTomo_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="IconContainer">
                        <BsTwitter color="#1da1f2" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
