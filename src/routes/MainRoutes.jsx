import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:"/", 
                element: <Home></Home>,
            },
            {
                path:"/about", 
                element: <About></About>,
            },
            {
                path:"/contact", 
                element: <Contact></Contact>,
            },
            {
                path:"/projects", 
                element: <Projects></Projects>,
            }
        ]
    }
])