import {useParams} from "react-router-dom";
import StateMessage from "../../../components/StateMessage/StateMessage.tsx";
import {useProjectDetails} from "../../../hooks/useProjectDetails.ts";
import styles from "../../blog/Blog/blog.module.scss";
import ImageCarousel from "../../../components/ImageCarousel/ImageCarouse.tsx";
import Section from "../../../components/Section/Section.tsx";

const Project = () => {
    const {id} = useParams();


    const {project, loading, error} = useProjectDetails(id);

    if (!project || (error || loading)) return (
        <StateMessage key={"project-page-stateMessage"} loading={loading}
                      message={(!project || error) ? "Projekt se nepodařilo načíst... :(" : undefined}/>);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.paragraph}>{project.description}</p>
            <main className={styles.main}>
                <ImageCarousel parentId={project.id} parentType={"project"} images={project.images}  className={"flex items-center justify-center gap-4 full-parent-width"}/>
                {project.sections.map(section => (
                    <Section key={"blog-" + project.id + "-section-" + section.id} id={section.id}
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

export default Project;