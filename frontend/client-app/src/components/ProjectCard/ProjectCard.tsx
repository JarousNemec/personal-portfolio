import React from "react";
import styles from "./projectCard.module.scss"
import type {TagModel} from "../../../../../shared/models/tagModel.ts";
import {Tag} from "../Tag/Tag.tsx";
import {Link} from "react-router-dom";

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    tags: TagModel[];
    downloadLabel?: string;
    downloadUrl?: string;
    repoUrl?: string;
    repoLabel?: string;
    className?: string;
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
                                                            className,
                                                        }) => {
    const titleId = "title-" + id;
    return (

        <article id={id} className={[styles.project, className].filter(Boolean).join(" ")}
                 aria-labelledby={titleId}>
            <Link to={`/blog/${id}`}>
                <h4 id={titleId} className={`${styles.cardTitle} mt-2`}>{title}</h4>

                <p className={`${styles.cardDescription} m-0`}>{description}</p>

                <div className={`flex-wrap mt-3 gap-2`} aria-hidden="true">
                    {tags.map((tag, i) => (
                        <Tag key={id + "-tag-" + i} keyId={id + "-tagSpan-" + i} model={tag}/>
                    ))}
                </div>
            </Link>
            <p className={`${styles.cardActions} mt-3`}>
                {downloadUrl && <><a href={downloadUrl} className={styles.pageRedirect}>
                    {downloadLabel}
                </a></>}
                {(downloadUrl && repoUrl) && <>
                    {" "}•{" "}
                </>}
                {repoUrl && <><a href={repoUrl} className={styles.pageRedirect}>
                    {repoLabel}
                </a></>}
            </p>
        </article>

    );
};
