import {createBrowserRouter} from "react-router-dom";
import Login from "./assets/views/Login";
import Signup from "./assets/views/Signup";
import User from "./assets/views/User";
import Notfound from "./assets/views/Notfound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./assets/views/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
            path: "/dashboard",
            element: <Dashboard />
            },
            {
            path: "/user",
            element: <User />
            }
        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
            path: "/login",
            element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ]
    },
  
    {
        path: "*",
        element: <Notfound />
    }
])

export default router;