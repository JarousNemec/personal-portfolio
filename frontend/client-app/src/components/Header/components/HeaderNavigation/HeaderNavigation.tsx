import React, {useState} from "react";
import styles from "./headerNavigation.module.scss";
import {useScrollToId} from "../../../../hooks/useScrollToId.ts";

type HeaderNavigationProps = {
    className?: string;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({className}) => {
    const [open, setOpen] = useState(false);
    const scrollToSection = useScrollToId();

    const handleClick = (section: string) => {
        scrollToSection("/", section);
        setOpen(false); // zavřít menu po kliknutí
    }

    return (
        <nav className={className ? className : ""} aria-label="Primární">
            {/* Hamburger button */}
            <button
                className={`${styles.burger} ${open ? styles.open : ""}`}
                aria-label="Menu"
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Navigation list */}
            <ul className={`${styles.menu} ${open ? styles.menuOpen : ""} flex items-center gap-3`}>
                <li><a className={`${styles.navLink} py-2 px-3`} onClick={() => handleClick("about")}>O mně</a></li>
                <li><a className={`${styles.navLink} py-2 px-3`} onClick={() => handleClick("projects")}>Projekty</a>
                </li>
                <li><a className={`${styles.navLink} py-2 px-3`} onClick={() => handleClick("blog")}>Blogy</a></li>
                <li><a className={`${styles.navLink} py-2 px-3`} onClick={() => handleClick("contact")}>Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;
