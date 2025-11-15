import styles from "./headerNavigation.module.scss";
import {useScrollToSection} from "../../hooks/useScrollToId.ts";

const HeaderNavigation = () => {
    const scrollToSection = useScrollToSection();
    return (

        <nav className="primary" aria-label="Primární">
            <ul style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                <li><a className={styles.navLink} onClick={()=> scrollToSection("about")}>O mně</a></li>
                <li><a className={styles.navLink} onClick={()=> scrollToSection("projects")}>Projekty</a></li>
                <li><a className={styles.navLink} onClick={()=> scrollToSection("blog")}>Blog</a></li>
                <li><a className={styles.navLink} onClick={()=> scrollToSection("contact")}>Kontakt</a></li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation;