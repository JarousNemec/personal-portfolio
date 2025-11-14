import ContactSection from "../components/ContactSection/ContactSection.tsx";
import BlogSection from "../components/BlogSection/BlogSection.tsx";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.tsx";
import AboutSection from "../components/AboutSection/AboutSection.tsx";
import HeroSection from "../components/HeroSection/HeroSection.tsx";

const Home = () => {
    return (<>
        <HeroSection/>

        <main>
            <AboutSection/>

            <ProjectsSection/>

            <BlogSection/>

            <ContactSection/>
        </main>
    </>)
}

export default Home;