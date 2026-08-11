import {createBrowserRouter} from "react-router-dom";
import Login from "./assets/views/Login";
import Signup from "./assets/views/Signup";
import User from "./assets/views/User";
import Notfound from "./assets/views/Notfound";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/user",
        element: <User />
    },
    {
        path: "*",
        element: <Notfound />
    }
])

export default router;