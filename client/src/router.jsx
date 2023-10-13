import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Customers from "./pages/customers"
import Dashboard from "./pages/dashboard"
import Signin from "./pages/users/signin"
import Signup from "./pages/users/signup"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },

            {
                path: "customers",
                element: <Customers />
            }
        ]
    },

    {
        path: "/signin",
        element: <Signin />
    },

    {
        path: "/signup",
        element: <Signup />
    },
])