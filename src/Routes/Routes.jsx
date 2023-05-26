import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <DoctorProfile></DoctorProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);



export default router