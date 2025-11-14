import styles from "./headerNavigation.module.scss";

const HeaderNavigation = () => {
    return (

        <nav className="primary" aria-label="Primární">
            <ul style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                <li><a className={styles.navLink} href="#about">O mně</a></li>
                <li><a className={styles.navLink} href="#projects">Projekty</a></li>
                <li><a className={styles.navLink} href="#blog">Blog</a></li>
                <li><a className={styles.navLink} href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation;