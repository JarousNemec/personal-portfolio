import HeaderLogo from "./components/HeaderLogo/HeaderLogo.tsx";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation.tsx";
import styles from "./header.module.scss"

const Header = () => {
    return (
        <header className={styles.siteHeader} role="banner">
            <div className={`${styles.navWrap} ${styles.container}`} role="navigation" aria-label="Hlavní navigace">
                <HeaderLogo />
                <HeaderNavigation />
            </div>
        </header>)
}

export default Header;