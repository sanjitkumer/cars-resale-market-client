import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login /Login";
import SignUp from "../../Pages/signup/signUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
    }
])

export default router;