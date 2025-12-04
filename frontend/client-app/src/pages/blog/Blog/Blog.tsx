import styles from "./blog.module.scss";
import Section from "../../../components/Section/Section.tsx";
import {useParams} from "react-router-dom";
import {useBlogDetails} from "../../../hooks/useBlogDetails.ts";
import StateMessage from "../../../components/StateMessage/StateMessage.tsx";
import ImageCarousel from "../../../components/ImageCarousel/ImageCarousel.tsx";
import React from "react";

type BlogProps = {
    className?: string;
}

const Blog:React.FC<BlogProps> = ({className}) => {
    const {id} = useParams();


    const {blog, loading, error} = useBlogDetails(id);

    if (!blog || (error || loading)) return (
        <StateMessage key={"blog-page-stateMessage"} loading={loading}
                      message={(!blog || error) ? "Článek se nepodařilo načíst... :(" : undefined} className={"row-center py-8"}/>);
    return (
        <div className={`${className} container flex-column items-center`}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.paragraph} >{blog.description}</p>
            <main className={styles.main}>
                <ImageCarousel parentId={blog.id} parentType={"blog"} images={blog.images} className={"flex items-center justify-center gap-4 full-parent-width"}/>
                {blog.sections.map(section => (
                    <Section key={"blog-" + blog.id + "-section-" + section.id} id={section.id}
                             title={section.title}
                             containerAriaLabel={section.title}
                             containerClassName={styles.blogSection}>
                        {section.paragraphs.map((paragraph, index) => (
                            <p key={"paragraph-" + section.id + "-" + index} className={styles.paragraph}>
                                {paragraph}
                            </p>))}

                    </Section>
                ))}
            </main>
        </div>
    );
}

export default Blog;