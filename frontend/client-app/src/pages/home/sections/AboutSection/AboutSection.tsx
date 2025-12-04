import styles from "./aboutSection.module.scss"

import Section from "../../../../components/Section/Section.tsx";
import React from "react";

type AboutSectionProps = {
    className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({className}) => {


    return (
        <Section id={"about"} title={"O mně"} containerClassName={`flex-wrap-center gap-9`}
                 containerAriaLabel={"Základní informace o mně"} className={className}>
            <p className={styles.bio}>
                Jmenuji se Jaroslav Němec a už několik let se věnuji vývoji software a práci se zajímavými
                technologiemi.
                Aktuálně studuji obor Aplikovaná informatika na Univerzitě Hradec Králové. Zaměřuji se na
                vývoj webových i desktopových aplikací a mým cílem je stát se kvalitním full-stack vývojářem jak po
                teoretické tak i praktické stránce.
                <br/><br/>
                Programování mě provází už od základní školy – začínal jsem v C#, později jsem se věnoval IoT projektům
                a dnes pracuji hlavně s moderními webovými technologiemi. Na vývoji mě baví hlavně to, že za sebou vidím
                konkrétní výsledky. Rád zkouším nové věci, hraju si s technologiemi a postupně si rozšiřuju znalosti
                tím, že tvořím projekty, které jsou užitečné a praktické.
            </p>
        </Section>
    );
};

export default AboutSection;
