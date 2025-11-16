import React from "react";
import styles from "./projectCard.module.scss"

type Tag = {
    label: string;
    type: "tagHardware" | "tagBackend" | "tagWeb" | "tagOther" | string;
};

interface ProjectCardProps {
    id: string;                 // např. "p1"
    title: string;
    description: string;
    tags: Tag[];
    downloadLabel?: string;     // např. "Stáhnout build"
    downloadUrl?: string;       // URL ke stažení
    repoUrl?: string;           // GitHub URL
    repoLabel?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
                                                            id,
                                                            title,
                                                            description,
                                                            tags,
                                                            downloadLabel = "Stáhnout",
                                                            downloadUrl,
                                                            repoLabel = "Repo (GitHub)",
                                                            repoUrl,
                                                        }) => {
    const titleId = "title-" + id;
    return (
        <article id={id} className={styles.project} role="listitem" aria-labelledby={titleId}>
            <h3 id={titleId} className={styles.cardTitle}>{title}</h3>

            <p className={styles.cardDescription}>{description}</p>

            <div className={styles.tags} aria-hidden="true">
                {tags.map((tag, i) => (
                    <span key={i} className={`${styles.tag} ${styles[tag.type]}`}>
            {tag.label}
          </span>
                ))}
            </div>

            <p className={styles.cardActions}>
                {downloadUrl &&
                    <><a href={downloadUrl} download>
                        {downloadLabel}
                    </a>{" "}</>}

                {repoUrl &&
                    <>•{" "}
                        <a href={repoUrl}>
                            {repoLabel}
                        </a></>}
            </p>
        </article>
    );
};
