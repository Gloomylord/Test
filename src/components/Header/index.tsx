import React, {useCallback, useState} from "react";
import Brand from "../Brand";
import s from './style.scss';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = useCallback(() => {
            setIsOpen(!isOpen);
    },[isOpen]);

    const close = useCallback((e: React.MouseEvent) => {
        if ((e.target as Element).classList.contains(s.link))
            setIsOpen(false);
    }, []);

    return <header className={s.header}>
        <div className={s.container}>
            <Brand/>
            <nav onClick={close} className={s.nav + ' ' + ((isOpen) ? s.open : '')}>
                <ul className={s.list}>
                    {["home", "portfolio", "about", "contact"].map((value) =>
                        <li key={value} className={s.item}>
                            <a href={"#" + value} className={s.link}>{value}</a>
                        </li>
                    )}
                </ul>
            </nav>
            <div onClick={toggle} className={s.hamburger + ' ' + ((isOpen) ? s.active : '')}>
                <span/>
            </div>
        </div>
    </header>
};

export default Header;
