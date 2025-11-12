import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import Home from "./pages/home/Home/Home.tsx";
import Project from "./pages/project/Project/Project.tsx";
import Blog from "./pages/blog/Blog/Blog.tsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="project/:id" element={<Project/>}/>
                <Route path="blog/:id" element={<Blog/>}/>
            </Route>
        </Routes>
    )
}

export default App
