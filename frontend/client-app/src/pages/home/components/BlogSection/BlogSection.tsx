import React from 'react';
import Section from '../../../../components/Section/Section';
import styles from "./blogSection.module.scss"
import {BlogCard} from "./components/BlogCard/BlogCard.tsx";

const BlogSection: React.FC = () => {
    return (
        <Section id={"blog"} title={"Blog & poznámky"} containerClassName={styles.blogsGrid}
                 containerAriaLabel={"Seznam článků z blogu"} containerRole={"list"}>
            <BlogCard id={"b1"}
                      title={"Optimalizace MQTT přenosu"}
                      description={"Praktické tipy jak snížit latenci a šetřit šířku pásma v IoT sítích."}/>

            <BlogCard id={"b2"}
                      title={"ESP32 vs Raspberry Pi Pico"}
                      description={"Krátké srovnání z hlediska výkonu, spotřeby a vhodnosti do nasazení."}/>

            <BlogCard id={"b3"}
                      title={"Bezpečnostní základy pro embedded"}
                      description={"Nastavení TLS, bezpečné OTA a minimalizace útokových vektorů u IoT zařízení."}/>

        </Section>
    );
};

export default BlogSection;
