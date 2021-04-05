import React from "react";
import s from "./style.scss";
import Button from "../Button";
import CustomMap from "../Map";

const ContactUs: React.FC = () => {
    return (
        <section id="contact" className={s.contact }>
            <h2 className={s.title}>Contact Us</h2>
            <h5 className={s.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
            <div className={s.container}>
                <form className={s.form}>
                    <div className={s.inputs}>
                        <input placeholder="Your name" type="text" className={s.input}/>
                        <input placeholder="Your email" type="email" className={s.input}/>
                    </div>
                    <textarea placeholder="Your message" className={s.message}/>
                    <Button className={s.button} Tag="button" type="submit">Submit</Button>
                </form>
                <div className={s.mapContainer}>
                    <h4 className={s.mapTitle}> Bla Bla Company 125009 Moscow, Red Square 1</h4>
                    <div className={s.map}>
                        <CustomMap/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactUs;