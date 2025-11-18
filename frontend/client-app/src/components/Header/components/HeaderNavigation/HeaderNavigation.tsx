import {useState} from "react";
import styles from "./headerNavigation.module.scss";
import {useScrollToId} from "../../../../hooks/useScrollToId.ts";

const HeaderNavigation = () => {
    const [open, setOpen] = useState(false);
    const scrollToSection = useScrollToId();

    const handleClick = (section: string) => {
        scrollToSection("/",section);
        setOpen(false); // zavřít menu po kliknutí
    }

    return (
        <nav className={styles.nav} aria-label="Primární">
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
            <ul className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
                <li><a className={styles.navLink} onClick={()=> handleClick("about")}>O mně</a></li>
                <li><a className={styles.navLink} onClick={()=> handleClick("projects")}>Projekty</a></li>
                <li><a className={styles.navLink} onClick={()=> handleClick("blog")}>Blog</a></li>
                <li><a className={styles.navLink} onClick={()=> handleClick("contact")}>Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;
