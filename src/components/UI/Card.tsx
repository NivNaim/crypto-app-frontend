import React from "react";
import classes from "./Card.module.scss";

interface CardProps {
    className: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
    return (
        <div className={`${classes.card} ${className}`}>
            {children}
        </div>
    );
}

export default Card;
