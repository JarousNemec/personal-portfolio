import HeaderLogo from "./components/HeaderLogo/HeaderLogo.tsx";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation.tsx";
import styles from "./header.module.scss"

const Header = () => {
    return (
        <header className={styles.siteHeader} role="banner">
            <div className={`${styles.navWrap} container flex items-center justify-between py-3`} role="navigation" aria-label="Hlavní navigace">
                <HeaderLogo className={"flex items-center gap-3"} />
                <HeaderNavigation />
            </div>
        </header>)
}

export default Header;