import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/errorpage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:"/", 
                element: <Home></Home>,
            }
        ]
    }
])