import React from "react";
import s from "./style.scss";
import Button from "../Button";

const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.copyright}>
                    <p>
                        © Copyright 2016 Bla Bla Studio | One Page Template
                    </p>
                </div>
                <Button Tag="a" className={s.top} href="#home"/>
            </div>
        </footer>
    )
};

export default Footer;