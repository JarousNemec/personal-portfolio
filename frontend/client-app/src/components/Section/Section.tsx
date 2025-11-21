import React from "react";
import styles from "./section.module.scss"

interface SectionProps {
    id: string;
    title?: string;
    sectionClassName?: string;
    sectionAriaLabel?: string;
    containerClassName?: string;
    children?: React.ReactNode;
    containerAriaLabel: string;
    containerRole?: string;
}

const Section: React.FC<SectionProps> = ({
                                                   id,
                                                   title,
                                                   sectionClassName = "",
                                                   sectionAriaLabel,
                                                   containerClassName = "",
                                                   children,
                                                   containerAriaLabel,
    containerRole
                                               }) => {
    const titleId = `${id}-title`;
    if (!title && !sectionAriaLabel) {
        throw new Error("Section must have either a title or a sectionAriaLabel for accessibility!");
    }

    return (
        <section id={id} className={`${styles.section} ${sectionClassName}`}
                 {...(title
                     ? {"aria-labelledby": titleId}
                     : {"aria-label": sectionAriaLabel})}>
            {title && <h2 id={titleId} className={styles.sectionTitle}>
                {title}
            </h2>}

            <div
                className={`${styles.container} ${containerClassName}`} aria-label={containerAriaLabel} {...(containerRole ? { "role": containerRole }:{})}>
                {children}
            </div>
        </section>
    );
};

export default Section;
