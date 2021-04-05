import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBasketballBall} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faTwitter, faGooglePlusG} from '@fortawesome/free-brands-svg-icons'
import s from "./style.scss";
import Button from "../Button";

export interface ICard {
    profession: string,
    fullName: string,
    description: string,
    url: {
        avatar: string,
        facebook: string,
        googlePlus: string,
        twitter: string,
        something: string
    }
}

interface IProps {
    data: ICard
}

const Card: React.FC<IProps> = ({data}) => {
    const {profession, fullName, url, description} = data;

    return <div className={s.card}>
        <div className={s.cardImage}>
            <img src={url.avatar} alt="avatar"/>
            <ul className={s.links}>
                <li>
                    <Button className={s.link} Tag={"a"} href={url.facebook}>
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </Button>
                </li>
                <li>
                    <Button className={s.link} Tag={"a"} href={url.twitter}>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </Button>
                </li>
                <li>
                    <Button className={s.link} Tag={"a"} href={url.googlePlus}>
                        <FontAwesomeIcon icon={faGooglePlusG}/>
                    </Button></li>
                <li>
                    <Button className={s.link} Tag={"a"} href={url.something}>
                        <FontAwesomeIcon icon={faBasketballBall}/>
                    </Button>
                </li>
            </ul>
        </div>
        <div className={s.cardText}>
            <h3 className={s.cardTitle}>{fullName}</h3>
            <h6 className={s.cardSubtitle}>{profession}</h6>
            <p className={s.description}>
                {description}
            </p>
        </div>
    </div>
};

export default Card;