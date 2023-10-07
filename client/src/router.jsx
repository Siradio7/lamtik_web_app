import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Customers from "./pages/customers"
import Dashboard from "./pages/dashboard"

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
    }
])