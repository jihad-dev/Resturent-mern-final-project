import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../../Pages/Home/Home/Home";
import Menu from "../../../Pages/Menu/Menu/Menu";
import Order from "../../../Pages/Order/Order/Order";
import Login from "../../../Pages/Login/Login";
import SignUp from "../../../Pages/SignUp/SignUp";
import Dashboard from "../../Layout/Dashboard";
import MyCart from "../../../Pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsers from "../../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../../../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../../../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../../../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../../../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../../../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../../../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../../../Pages/Dashboard/UserHome/UserHome";
import ErrorPage from "../../../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
     
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/my-cart",
        element: <MyCart></MyCart>
      },
      {
        path:"/dashboard/user-home",
        element:<UserHome></UserHome>
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>
      },
      {
      path:'/dashboard/payment-history',
      element:<PaymentHistory></PaymentHistory>,
      
      
      },
      // admin only routes //
      {
        path:'/dashboard/all-users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'/dashboard/add-items',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'/dashboard/manage-items',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'/dashboard/updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: async ({params}) => {
          return  fetch(`https://bistroo-boss-server.vercel.app/menu/${params.id}`)
        }
       
      },
      {
        path:'/dashboard/admin-home',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      }
    ],
  },
  {
  path:'*',
  element:<ErrorPage></ErrorPage>
  }

]);
