import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Appoinment from "../Pages/Appoinment/Appoinment";


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
                path: 'appoinment',
                element: <Appoinment></Appoinment>
            },
            {
                path: '/profile/:id',
                element: <PrivateRoute><DoctorProfile></DoctorProfile></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:6969/profile/${params.id}`)
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