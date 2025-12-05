import React from "react";
import styles from "./blogCard.module.scss"
import {Link} from "react-router-dom";

export interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
                                                      id,
                                                      title,
                                                      description, className
                                                  }) => {

    const titleId = "title-" + id;
    return (
        <Link to={`/blog/${id}`}
              className={[styles.blogCard, className].filter(Boolean).join(" ")}
        >
            <article
                id={id}
                aria-labelledby={titleId}
            >
                <h4 id={titleId} className={`${styles.blogTitle} mt-2`}>{title}</h4>
                <p className={`${styles.blogDescription} m-0`}>{description}</p>
            </article>
        </Link>
    );
};
