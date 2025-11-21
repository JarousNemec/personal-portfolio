import React from "react";
import styles from "./blogCard.module.scss"
import {useNavigate} from "react-router-dom";

export interface BlogCardProps {
    id: string;
    title: string;
    description: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
                                                      id,
                                                      title,
                                                      description,
                                                  }) => {
    const navigate = useNavigate();
    const onClick = () => navigate("/blog/" + id);

    const titleId = "title-" + id;
    return (
        <article
            id={id}
            className={`${styles.blogCard}`.trim()}
            role="listitem"
            aria-labelledby={titleId}
            onClick={onClick}
        >
            <h4 id={titleId} className={styles.blogTitle}>{title}</h4>
            <p className={styles.blogDescription}>{description}</p>
        </article>
    );
};
