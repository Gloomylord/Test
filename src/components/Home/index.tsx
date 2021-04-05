import React from "react";
import s from './style.scss';
import Button from "../Button";
import Header from "../Header";

const Home: React.FC = () => {
    return (
        <section className={s.home} id="home">
            <Header/>
            <div className={s.container}>
                <h1 className={s.title}>We build <strong>Brand</strong></h1>
                <h3 className={s.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorum
                    eligendi magni neque porro. Asperiores hic pariatur rerum voluptate voluptatum.</h3>
                <Button className={s.more} href="#" Tag="a">Learn more</Button>
                <Button className={s.down} href="#portfolio" Tag="a"/>
            </div>
        </section>
    )
};

export default Home;
