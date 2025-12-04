import styles from "./footer.module.scss";
import React from "react";

type FooterProps = {
    className?: string
}

const Footer: React.FC<FooterProps> = ({className}) => {
    return (<footer className={`${[styles.footer, className].filter(Boolean).join(" ")}`}>
        © 2025 Jaroslav Němec - since 2005 (beta)
    </footer>)
}

export default Footer;