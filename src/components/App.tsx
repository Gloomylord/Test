import React from "react";
import Home from "./Home";
import Portfolio from "./Portfolio";
import AboutUs from "./AboutUs";
import ContactUs from "./Contact";
import Footer from "./Footer";
//@ts-ignore
import s from '../styles/scss/App.scss';

const App:React.FC = () => {
    return (
        <div className={s.App}>
            <Home/>
            <Portfolio/>
            <AboutUs/>
            <ContactUs/>
            <Footer/>
        </div>
    )
};

export default App;
