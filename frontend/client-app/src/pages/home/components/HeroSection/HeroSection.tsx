import React from 'react';
import styles from './heroSection.module.scss'
import HeroContent from "./HeroContent.tsx";
import HeroAside from "./HeroAside.tsx";
import Section from "../../../../components/Section/Section.tsx";

const HeroSection: React.FC = () => {
    return (
        <Section id={"hero"} sectionAriaLabel={"Úvodní sekce"} containerAriaLabel={"Úvodní informace hero"} sectionClassName={styles.hero}
                 containerClassName={styles.heroContainer}>
            <HeroContent/>
            <HeroAside/>
        </Section>
    );
};

export default HeroSection;
