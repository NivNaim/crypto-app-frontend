import { FC } from "react";
import classes from "./Card.module.scss";

interface CardProps {
    className: string;
    children: React.ReactNode;
}

const Card: FC<CardProps> = ({ className, children }) => {
    return (
        <div className={`${classes.card} ${className}`}>
            {children}
        </div>
    );
}

export default Card;
