import React from 'react';
import styles from './heroContent.module.scss'
import {useScrollToSection} from "../../../../../../hooks/useScrollToId.ts";

const HeroContent: React.FC = () => {
    const scrollToSection = useScrollToSection();
    return (
        <div>
            <h1 className={styles.heroH1}>Vytvářím chytrá řešení — IoT, embedded &amp; web</h1>
            <p className={styles.heroLead}>
                Jsem vývojář, který propojuje hardware a software. Dělám malé i větší IoT projekty, dashboardy a
                nástroje pro zpracování dat — čistě, efektivně a s důrazem na použitelnost.
            </p>

            <div className={styles.fastForwardBtns} role="group" aria-label="Hlavní akce">
                <a className="btn" onClick={()=> scrollToSection("projects")}>Moje projekty</a>
                <a className="btn ghost" onClick={()=> scrollToSection("contact")}>Kontakt</a>
            </div>
        </div>
    );
};

export default HeroContent;