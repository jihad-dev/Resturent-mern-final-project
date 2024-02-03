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
        path:'/dashboard/all-users',
        element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
      }
    ],
  },
]);
