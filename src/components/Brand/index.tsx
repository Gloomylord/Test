import React from "react";
import cn from "classnames";
import s from './style.scss';

interface IProps {
    className?: string
}

const Brand: React.FC<IProps> = ({className}) => {
    return (
        <div className={cn(s.brand, className)}>
            <img aria-hidden={true} alt="logo" className={s.logo} src='/assets/images/logo.png'/>
            <div className={s.block}>
                <h3 className={s.title}>BLA BLA</h3>
                <h6 className={s.subtitle}>One Page Flat Template</h6>
            </div>
        </div>
    )
};

export default Brand;