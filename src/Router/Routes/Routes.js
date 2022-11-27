import { createBrowserRouter } from "react-router-dom"

import Main from "../../Layouts/Main"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import CategoryProduct from "../../Pages/Products/CategoryProduct";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../Pages/Blog/Blog";
import DashboardLayout from "../../Layouts/DashboardLayout";
import MyOrder from "../../Pages/Dashboard/My Order/MyOrder";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import SellerRoute from '../SellerRoute/SellerRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryProduct></CategoryProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/products/:id',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myOrder',
                element: <BuyerRoute><MyOrder></MyOrder></BuyerRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])


export default router;