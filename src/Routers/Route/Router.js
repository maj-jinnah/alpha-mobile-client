import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import Main from "../../Layouts/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddAProduct from "../../Pages/DashBoard/Add a Product/AddAProduct";
import AllBuyers from "../../Pages/DashBoard/All Buyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/All Sellers/AllSellers";
import MyProducts from "../../Pages/DashBoard/My Products/MyProducts";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import ReportedItems from "../../Pages/DashBoard/Reported Items/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import Phones from "../../Pages/Phones/Phones";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../../Pages/Shared/Login/Login";
import Signup from "../../Pages/Shared/Signup/Signup";
import AdminRoute from "../PrivetRouter/AdminRoute";
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
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])