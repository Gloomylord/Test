import React, {ComponentType} from "react";
import cn from "classnames";
import s from "./style.scss";

interface IButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    children?: React.ReactNode,
    props?: any,
    onClick?: any,
    Tag: ComponentType | keyof JSX.IntrinsicElements,
    className?: string,
}

const Button: React.FC<IButtonProps> = ({
                                            children,
                                            className,
                                            onClick = () => {},
                                            Tag = "button",
                                            ...props}) =>
{
    return (
        <Tag onClick={onClick} className={cn(s.button, className)} {...props}>
            {children}
        </Tag>
    )
};

export default Button;
