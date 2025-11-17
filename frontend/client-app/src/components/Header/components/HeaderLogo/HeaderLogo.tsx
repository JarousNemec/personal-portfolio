import styles from './headerLogo.module.scss'

const HeaderLogo = () => {
    return (
        <div className={styles.brand} aria-hidden="false">
            <div className={styles.logo} aria-hidden="true">JN</div>
            <div className={styles.brandLabel}>
                <div style={{fontSize: '14px'}}>Jaroslav Němec</div>
                <div style={{fontSize: '12px'}}>Programátor, elektrikář a kutil</div>
            </div>
        </div>)
}

export default HeaderLogo;