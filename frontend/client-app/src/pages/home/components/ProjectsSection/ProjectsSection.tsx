import React from 'react';
import Section from '../../../../components/Section/Section';

const ProjectsSection: React.FC = () => {
    return (
        <Section id={"projects"} title={"Projekty"} containerClassName={"projects-grid"} containerAriaLabel={"Seznam projektů"}
                 containerRole={"list"}>

            <article className="project" role="listitem" aria-labelledby="p1">
                <h3 id="p1">IoT Meteostanice</h3>
                <p>Kompletní senzorická jednotka sbírající teplotu, vlhkost a kvalitu vzduchu. Data posílá do
                    cloudu s Web dashboardem.</p>
                <div className="tags" aria-hidden="true">
                    <span className="tag hardware">ESP32</span>
                    <span className="tag backend">MQTT</span>
                    <span className="tag backend">OTA</span>
                </div>
                <p style={{marginTop: '12px', fontSize: '0.92rem', color: 'var(--muted)'}}>
                    <a href="#" download>Stáhnout build</a> • <a href="#">Repo (GitHub)</a>
                </p>
            </article>

            <article className="project" role="listitem" aria-labelledby="p2">
                <h3 id="p2">Chytrý Zásuvkový Modul</h3>
                <p>ESP32 modul pro měření a řízení spotřeby s bezpečnostními opatřeními a OTA aktualizacemi.</p>
                <div className="tags" aria-hidden="true">
                    <span className="tag web">React</span>
                    <span className="tag backend">WebSocket</span>
                    <span className="tag web">D3.js</span>
                </div>
                <p style={{marginTop: '12px', fontSize: '0.92rem', color: 'var(--muted)'}}>
                    <a href="#" download>Stáhnout firmware</a> • <a href="#">Repo (GitHub)</a>
                </p>
            </article>

            <article className="project" role="listitem" aria-labelledby="p3">
                <h3 id="p3">Sensor Network Visualizer</h3>
                <p>Vizualizace sítě senzorů v reálném čase pomocí WebSocketů a jednoduchého 2D mapového
                    zobrazení.</p>
                <div className="tags" aria-hidden="true">
                    <span className="tag hardware">Sensor</span>
                    <span className="tag backend">Node.js</span>
                    <span className="tag backend">Cloud</span>
                </div>
                <p style={{marginTop: '12px', fontSize: '0.92rem', color: 'var(--muted)'}}>
                    <a href="#" download>Demo build</a> • <a href="#">Repo (GitHub)</a>
                </p>
            </article>

        </Section>
    );
};

export default ProjectsSection;
