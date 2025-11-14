import Contacts from "../components/Contacts/Contacts.tsx";
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

            <Contacts/>
        </main>
    </>)
}

export default Home;