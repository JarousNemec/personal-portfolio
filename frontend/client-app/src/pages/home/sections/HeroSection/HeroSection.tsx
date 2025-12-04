import React from 'react';
import styles from './heroSection.module.scss'
import HeroContent from "../../../../components/HeroContent/HeroContent.tsx";
import HeroAside from "../../../../components/HeroAside/HeroAside.tsx";
import Section from "../../../../components/Section/Section.tsx";

const HeroSection: React.FC = () => {
    return (
        <Section id={"hero"} sectionAriaLabel={"Úvodní sekce"} containerAriaLabel={"Úvodní informace hero"} className={styles.hero}
                 containerClassName={styles.heroContainer}>
            <HeroContent/>
            <HeroAside/>
        </Section>
    );
};

export default HeroSection;
