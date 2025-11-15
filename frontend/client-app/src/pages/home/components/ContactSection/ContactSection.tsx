import React from 'react';
import GithubIcon from "../../../../icons/GithubIcon.tsx";
import LinkedinIcon from "../../../../icons/LinkedinIcon.tsx";
import EmailIcon from "../../../../icons/EmailIcon.tsx";
import IconLinkButton from "../../../../components/IconLinkButton/IconLinkButton.tsx";
import styles from "./contactSection.module.scss";
import Section from '../../../../components/Section/Section.tsx';

const ContactSection: React.FC = () => {
    return (

        <Section id={"contact"} title={"Kontakt"} containerAriaLabel={"Karta s možnostmi, jak mě kontaktovat"}>

            <div className={styles.contactCard} role="region">
                <p className={styles.contactMessage}>
                    Chceš spolupracovat nebo máš dotaz? Napiš mi — rád se ozvu.
                </p>
                <p className={styles.mainContact}>
                    <a href="mailto:jarous.nemec@gmail.com">
                        jarous.nemec@gmail.com
                    </a>
                </p>

                <div className={styles.contactLinks}>
                    <IconLinkButton icon={<EmailIcon/>} variant="email" href="mailto:jarous.nemec@gmail.com"
                                    label="E-mail" external={true}></IconLinkButton>

                    <IconLinkButton icon={<GithubIcon/>} variant="github" href="https://github.com/JarousNemec"
                                    label="GitHub" external={true}></IconLinkButton>

                    <IconLinkButton icon={<LinkedinIcon/>} variant="linkedin"
                                    href="https://www.linkedin.com/in/jaroslav-n%C4%9Bmec-800a17252/"
                                    label="LinkedIn" external={true}></IconLinkButton>
                </div>
            </div>

        </Section>
    );
};

export default ContactSection;