import React from 'react';
import Section from '../../../../components/Section/Section';
import styles from './projectsSection.module.scss';
import {ProjectCard} from "./components/ProjectCard/ProjectCard.tsx";
import {useProjects} from "../../../../hooks/useProjects.ts";
import StateMessage from "../../../../components/StateMessage/StateMessage.tsx";

const ProjectsSection: React.FC = () => {
    const {projects, loading, error} = useProjects();

    const projectsAvailable = ((projects && projects.length > 0) && !loading && !error);
    return (
        <>{projectsAvailable &&
            <Section id={"projects"} title={"Projekty"} containerClassName={styles.projectsGrid}
                     containerAriaLabel={"Seznam projektů"}
                     containerRole={"list"}>
                <StateMessage key={"projects-state-message"} loading={loading}
                              message={!projectsAvailable ? "Zatím jsem do portfolia nenahrál žádné projekty..." : undefined}/>
                {projects.map((project, index) => <ProjectCard key={project.id + "-" + index} id={project.id}
                                                               title={project.title}
                                                               description={project.description}
                                                               tags={project.tags}
                                                               downloadLabel={project.downloadLabel}
                                                               downloadUrl={project.downloadUrl}
                                                               repoLabel={project.gitRepoLabel}
                                                               repoUrl={project.gitRepoUrl}/>)}
            </Section>
        }
        </>
    )
        ;
};

export default ProjectsSection;
