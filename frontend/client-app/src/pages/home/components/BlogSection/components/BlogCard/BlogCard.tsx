import React from "react";
import styles from "./blogCard.module.scss"

export interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    className?: string; // možnost doplnit další styly zvenku
}

export const BlogCard: React.FC<BlogCardProps> = ({
                                                      id,
                                                      title,
                                                      description,
                                                      className = "",
                                                  }) => {
    const titleId = "title-" + id;
    return (
        <article
            id={id}
            className={`${styles.blogCard} ${className}`.trim()}
            role="listitem"
            aria-labelledby={titleId}
        >
            <h4 id={titleId} className={styles.blogTitle}>{title}</h4>
            <p className={styles.blogDescription}>{description}</p>
        </article>
    );
};
