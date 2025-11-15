import styles from "./aboutSection.module.scss"

import React from 'react';
import Section from "../../../../components/Section/Section.tsx";

const AboutSection: React.FC = () => {
    return (
        <Section id={"about"} title={"O mně"} containerClassName={styles.about} containerAriaLabel={"Základní informace o mně"}>
            <p className={styles.bio}>
                Jmenuji se Jarda a věnuji se vývoji IoT zařízení a webových rozhraní pro jejich správu. Mám zkušenosti s
                návrhem elektroniky, firmwarem pro mikrokontroléry a tvorbou dashboardů pro vizualizaci dat. Ve svých
                projektech kladu důraz na spolehlivost, energetickou účinnost a jednoduché uživatelské rozhraní.
            </p>
        </Section>
    );
};

export default AboutSection;
