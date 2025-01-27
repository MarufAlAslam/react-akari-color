import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/main.layout";
import Homepage from "../pages/homepage";
import Upload from "../pages/upload";
import About from "../pages/about";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/upload",
                element: <Upload />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "*",
                element: <div>Not Found</div>
            }
        ]
    },
]);
export default router;