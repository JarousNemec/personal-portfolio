import React from 'react';
import Section from '../../../../components/Section/Section';
import styles from './projectsSection.module.scss';
import {ProjectCard} from "./components/ProjectCard/ProjectCard.tsx";

const ProjectsSection: React.FC = () => {
    return (
        <Section id={"projects"} title={"Projekty"} containerClassName={styles.projectsGrid} containerAriaLabel={"Seznam projektů"}
                 containerRole={"list"}>
            <ProjectCard id={"p1"}
                         title={"IoT Meteostanice"}
                         description={"Kompletní senzorická jednotka sbírající teplotu, vlhkost a kvalitu vzduchu. Data posílá do\n" +
                             "                    cloudu s Web dashboardem."}
                         tags={[{label: "ESP32", type: "tagHardware"}, {
                             label: "MQTT",
                             type: "tagBackend"
                         }, {label: "OTA", type: "tagBackend"}]}
                         downloadLabel={"Stáhnout build"} downloadUrl={"#"}
                         repoLabel={"Repo (GitHub)"} repoUrl={"#"}/>

            <ProjectCard id={"p2"}
                         title={"Chytrý Zásuvkový Modul"}
                         description={"ESP32 modul pro měření a řízení spotřeby s bezpečnostními opatřeními a OTA aktualizacemi."}
                         tags={[{label: "React", type: "tagWeb"}, {
                             label: "WebSocket",
                             type: "tagBackend"
                         }, {label: "D3.js", type: "tagWeb"}]}
                         downloadLabel={"Stáhnout firmware"} downloadUrl={"#"}
                         repoLabel={"Repo (GitHub)"} repoUrl={"#"}/>

             <ProjectCard id={"p3"}
                         title={"Sensor Network Visualizer"}
                         description={"Vizualizace sítě senzorů v reálném čase pomocí WebSocketů a jednoduchého 2D mapového\n" +
                             "                    zobrazení."}
                         tags={[{label: "Sensor", type: "tagHardware"}, {
                             label: "Node.js",
                             type: "tagBackend"
                         }, {label: "Cloud", type: "tagBackend"}]}
                         downloadLabel={"Demo build"} downloadUrl={"#"}
                         repoLabel={"Repo (GitHub)"} repoUrl={"#"}/>
        </Section>
    );
};

export default ProjectsSection;
