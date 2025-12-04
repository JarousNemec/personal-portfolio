import styles from './headerLogo.module.scss'
import React from "react";

type HeaderLogoProps = {
    className?: string
}

const HeaderLogo:React.FC<HeaderLogoProps> = ({className}) => {
    return (
        <div className={`${styles.brand} ${className}`} aria-hidden="false">
            <div className={`${styles.logo} grid place-center`} aria-hidden="true">JN</div>
            <div className={`block`}>
                <div className={styles.brandLabelTitle}>Jaroslav Němec</div>
                <div className={styles.brandLabelSubtitle}>Full-stack vývojář</div>
            </div>
        </div>)
}

export default HeaderLogo;