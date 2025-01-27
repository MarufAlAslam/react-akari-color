import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/main.layout";
import Homepage from "../pages/homepage";

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
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "*",
                element: <div>Not Found</div>
            }
        ]
    },
]);
export default router;