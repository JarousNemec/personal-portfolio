import React from "react";
import styles from "./button.module.scss";

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    variant?: "ghost" | undefined;
};

const Button: React.FC<ButtonProps> = ({children, onClick, className, variant}) => {
    return (
        <a
            className={`${[styles.btn, className, (variant==="ghost")?styles.ghost:''].filter(Boolean).join(" ")}`}
            onClick={onClick}
            style={{cursor: "pointer"}}
        >
            {children}
        </a>
    );
};

export default Button;