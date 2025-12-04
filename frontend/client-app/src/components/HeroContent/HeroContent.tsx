import React from 'react';
import styles from './heroContent.module.scss'
import {useScrollToId} from "../../hooks/useScrollToId.ts";
import Button from "../Button/Button.tsx";

type HeroContentProps = {
    className?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({className}) => {
    const scrollToSection = useScrollToId();
    return (
        <div className={className ? className : ''}>
            <h1 className={`${styles.heroH1} mt-3`}>Nebojím se neznámého — kompletní vývoj od nápadu po hotový
                produkt</h1>
            <p className={`${styles.heroLead} mt-5`}>
                Jsem vývojář, který rád vytváří zajímavé a vyjímečné projekty. Když se objeví složitější problém, beru
                ho jako příležitost
                něco se naučit a najít řešení, které bude funkční a užitečné. Záleží mi na tom, aby věci dávaly smysl a
                dobře sloužily.
            </p>

            <div className={"flex-wrap gap-3"} role="group" aria-label="Hlavní akce">
                <Button onClick={() => scrollToSection("/", "projects")}>Moje projekty</Button>
                <Button variant={'ghost'} onClick={() => scrollToSection("/", "contact")}>Kontakt</Button>
            </div>
        </div>
    );
};

export default HeroContent;