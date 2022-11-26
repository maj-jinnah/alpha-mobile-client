import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import Main from "../../Layouts/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import Phones from "../../Pages/Phones/Phones";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../../Pages/Shared/Login/Login";
import Signup from "../../Pages/Shared/Signup/Signup";
import PrivetRoute from "../PrivetRouter/PrivetRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/brand'),
                element: <Home></Home>
            },
            {
                path: '/brand/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.id}`),
                element: <PrivetRoute><Phones></Phones></PrivetRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashBoardLayout></DashBoardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])