import ContactSection from "../components/ContactSection/ContactSection.tsx";
import BlogSection from "../components/BlogSection/BlogSection.tsx";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.tsx";
import AboutSection from "../components/AboutSection/AboutSection.tsx";
import HeroSection from "../components/HeroSection/HeroSection.tsx";
import styles from "./home.module.scss";

const Home = () => {
    return (<>
        <HeroSection/>

        <main className={styles.main}>
            <AboutSection/>

            <ProjectsSection/>

            <BlogSection/>

            <ContactSection/>
        </main>
    </>)
}

export default Home;