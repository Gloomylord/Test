import React from "react";
import s from './style.scss';
import Card, {ICard} from "./Card";

const Cards: Array<ICard> = [
        {
            profession: "Project Manager", fullName: "Melannie Doe",
            description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation",
            url: {avatar: "/assets/images/avatar1.png", facebook: "#", googlePlus: "#", twitter: "#", something: "#"}
        },
        {
            profession: "Graphic Designer", fullName: "Jhonnie Doe",
            description: "Ut wisi enim ad minim veniam, quis nostrud exerciprofession: \"Web Designer\", fullName: \"Daniel Doe\",\n" +
                "            description: \"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\",\n" +
                "            url: {avatar: \"/assets/images/avatar3.png\", facebook: \"#\", googlePlus: \"#\", twitter: \"#\", something: \"#\"}\n" +
                "        },profession: \"Web Designer\", fullName: \"Daniel Doe\",\n" +
                "            description: \"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\",\n" +
                "            url: {avatar: \"/assets/images/avatar3.png\", facebook: \"#\", googlePlus: \"#\", twitter: \"#\", something: \"#\"}\n" +
                "        }, tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat",
            url: {avatar: "/assets/images/avatar2.png", facebook: "#", googlePlus: "#", twitter: "#", something: "#"}
        },
        {
            profession: "Web Designer", fullName: "Daniel Doe",
            description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo",
            url: {avatar: "/assets/images/avatar3.png", facebook: "#", googlePlus: "#", twitter: "#", something: "#"}
        },
    ]
;

const AboutUs: React.FC = () => {
    return <section id="about" className={s.aboutUs}>
        <div className={s.container}>
            <h2 className={s.title}>About Us</h2>
            <h5 className={s.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
            <div className={s.cards}>
                {Cards.map((value, i)=> <Card key={i} data={value}/>)}
            </div>
        </div>
    </section>
};

export default AboutUs;
