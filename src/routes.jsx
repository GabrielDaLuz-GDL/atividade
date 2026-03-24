import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"

const Router = createBrowserRouter([

    {
        path : "/",
        element : <Home />
    },

    {
        path : "/Profile",
        element : <Profile />
    },

    {
        path : "/Contact",
        element : <Contact />
    }

])

export default Router;