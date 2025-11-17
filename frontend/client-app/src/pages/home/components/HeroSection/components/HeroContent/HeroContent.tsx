import React from 'react';
import styles from './heroContent.module.scss'
import {useScrollToSection} from "../../../../../../hooks/useScrollToId.ts";

const HeroContent: React.FC = () => {
    const scrollToSection = useScrollToSection();
    return (
        <div>
            <h1 className={styles.heroH1}>Nebojím se neznámého — kompletní vývoj od nápadu po hotový produkt</h1>
            <p className={styles.heroLead}>
                Jsem vývojář, který rád objevuje nové cesty. Když se objeví složitější problém, beru ho jako příležitost
                něco se naučit a najít řešení, které bude funkční a užitečné. Záleží mi na tom, aby věci dávaly smysl a
                lidem dobře sloužily.
            </p>

            <div className={styles.fastForwardBtns} role="group" aria-label="Hlavní akce">
                <a className="btn" onClick={() => scrollToSection("projects")}>Moje projekty</a>
                <a className="btn ghost" onClick={() => scrollToSection("contact")}>Kontakt</a>
            </div>
        </div>
    );
};

export default HeroContent;