import ContactSection from "../sections/ContactSection/ContactSection.tsx";
import BlogSection from "../sections/BlogSection/BlogSection.tsx";
import ProjectsSection from "../sections/ProjectSection/ProjectsSection.tsx";
import AboutSection from "../sections/AboutSection/AboutSection.tsx";
import HeroSection from "../sections/HeroSection/HeroSection.tsx";
import React from "react";

type HomeProps = {
    className?: string;
}

const Home: React.FC<HomeProps> = ({className}) => {
    return (
        <main className={className ?? ''}>
            <HeroSection/>

            <AboutSection/>

            <ProjectsSection/>

            <BlogSection/>

            <ContactSection/>
        </main>)
}

export default Home;