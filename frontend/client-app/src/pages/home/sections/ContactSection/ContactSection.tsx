import React from 'react';
import GithubIcon from "../../../../icons/GithubIcon.tsx";
import LinkedinIcon from "../../../../icons/LinkedinIcon.tsx";
import EmailIcon from "../../../../icons/EmailIcon.tsx";
import IconLinkButton from "../../../../components/IconLinkButton/IconLinkButton.tsx";
import styles from "./contactSection.module.scss";
import Section from '../../../../components/Section/Section.tsx';

type ContactSectionProps = {
    className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({className}) => {
    return (

        <Section id={"contact"} title={"Kontakt"} containerAriaLabel={"Karta s možnostmi, jak mě kontaktovat"}
                 containerRole="region" containerClassName={`${styles.contactCard} p-5 my-auto`} className={className}>

            <p className={`${styles.contactMessage} m-0`}>
                Chceš spolupracovat nebo máš dotaz? Napiš mi — rád se ozvu.
            </p>

            <p className={`${styles.mainContact} mt-3`}>
                <a href="mailto:jarous.nemec@gmail.com">
                    jarous.nemec@gmail.com
                </a>
            </p>

            <div className={`flex-wrap justify-center mt-6 gap-6`}>
                <IconLinkButton icon={<EmailIcon/>} variant="email" href="mailto:jarous.nemec@gmail.com"
                                label="E-mail" external={true}
                                className={"flex items-center gap-2"}></IconLinkButton>

                <IconLinkButton icon={<GithubIcon/>} variant="github" href="https://github.com/JarousNemec"
                                label="GitHub" external={true}
                                className={"flex items-center gap-2"}></IconLinkButton>

                <IconLinkButton icon={<LinkedinIcon/>} variant="linkedin"
                                href="https://www.linkedin.com/in/jaroslav-n%C4%9Bmec-800a17252/"
                                label="LinkedIn" external={true}
                                className={"flex items-center gap-2"}></IconLinkButton>
            </div>

        </Section>
    );
};

export default ContactSection;