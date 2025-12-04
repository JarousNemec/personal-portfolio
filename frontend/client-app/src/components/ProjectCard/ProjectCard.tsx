import React from "react";
import styles from "./projectCard.module.scss"
import type {TagModel} from "../../../../../shared/models/tagModel.ts";
import {Tag} from "../Tag/Tag.tsx";
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate();
    const onClick = () => navigate("/project/" + id);

    const titleId = "title-" + id;
    return (
        <article id={id} className={[styles.project, className].filter(Boolean).join(" ")} role="listitem"
                 aria-labelledby={titleId}>
            <span style={{cursor: "pointer"}} onClick={onClick}>
                <h4 id={titleId} className={`${styles.cardTitle} mt-2`}>{title}</h4>

                <p className={`${styles.cardDescription} m-0`}>{description}</p>

                <div className={`flex-wrap mt-3 gap-2`} aria-hidden="true">
                    {tags.map((tag, i) => (
                        <Tag key={id + "-tag-" + i} keyId={id + "-tagSpan-" + i} model={tag}/>
                    ))}
                </div>
            </span>

            <p className={`${styles.cardActions} mt-3`}>
                {downloadUrl && <><a href={downloadUrl} download>
                    {downloadLabel}
                </a></>}
                {(downloadUrl && repoUrl) && <>
                    {" "}•{" "}
                </>}
                {repoUrl && <><a href={repoUrl}>
                    {repoLabel}
                </a></>}
            </p>
        </article>
    );
};
