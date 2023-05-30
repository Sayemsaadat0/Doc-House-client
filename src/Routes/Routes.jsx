import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <PrivateRoute><DoctorProfile></DoctorProfile></PrivateRoute>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
            path: '/register',
            element: <Register></Register>
     
    }
]);



export default router