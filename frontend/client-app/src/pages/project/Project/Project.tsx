import {useParams} from "react-router-dom";
import StateMessage from "../../../components/StateMessage/StateMessage.tsx";
import {useProjectDetails} from "../../../hooks/useProjectDetails.ts";
import styles from "../../blog/Blog/blog.module.scss";
import ImageCarousel from "../../../components/ImageCarousel/ImageCarousel.tsx";
import Section from "../../../components/Section/Section.tsx";
import React from "react";

type ProjectProps = {
    className?: string;
}

const Project:React.FC<ProjectProps> = ({className}) => {
    const {id} = useParams();


    const {project, loading, error} = useProjectDetails(id);

    if (!project || (error || loading)) return (
        <StateMessage key={"project-page-stateMessage"} loading={loading}
                      message={(!project || error) ? "Projekt se nepodařilo načíst... :(" : undefined}
                      className={"row-center py-8"}/>);
    return (
        <main className={`${className ?? ''} page-container flex-column items-center`}>
            <h1 className={`${styles.title} mb-3`}>{project.title}</h1>
            <p className={`${styles.paragraph} px-5`}>{project.description}</p>
            <section>
                <ImageCarousel parentId={project.id} parentType={"project"} images={project.images}
                               className={"flex items-center justify-center gap-4 full-parent-width"}/>
                {project.sections.map(section => (
                    <Section key={"blog-" + project.id + "-section-" + section.id} id={section.id}
                             title={section.title}
                             containerAriaLabel={section.title}
                             containerClassName={`flex-wrap-center gap-1`}>
                        {section.paragraphs.map((paragraph, index) => (
                            <p key={"paragraph-" + section.id + "-" + index} className={styles.paragraph}>
                                {paragraph}
                            </p>))}

                    </Section>
                ))}
            </section>
        </main>
    );
}

export default Project;