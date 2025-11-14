import React from 'react';
import GithubIcon from "../../../../icons/GithubIcon.tsx";
import LinkedinIcon from "../../../../icons/LinkedinIcon.tsx";
import EmailIcon from "../../../../icons/EmailIcon.tsx";
import IconLinkButton from "../../../../components/IconLinkButton/IconLinkButton.tsx";
import styles from "./contactSection.module.scss";

const ContactSection: React.FC = () => {
    return (
        <section id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title" className="section-title">Kontakt</h2>
            <div className="container">
                <div className="contact-card" role="region" aria-label="Kontaktní informace">
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
            </div>
        </section>
    );
};

export default ContactSection;