import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import AboutUs from "../Pages/Shared/AboutUs";
import NotFound from "../Pages/Shared/NotFound";
import SignUp from "../Pages/SignUp/SignUp";
import AdminHome from "./../Pages/Dashboard/AdminHome/AdminHome";
import MyCart from "./../Pages/Dashboard/MyCart/MyCart";
import Home from "./../Pages/Home/Home";
import ManageItems from "./../Pages/Dashboard/ManageItems/ManageItems";
import AddItem from "./../Pages/Dashboard/AddItem/AddItem";
import AllUsers from "./../Pages/Dashboard/AllUsers/AllUsers";
import DashboardHome from "../Pages/Dashboard/DashboardHome";

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
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "dashboardhome",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },

      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "allusers",
        element: (
         
            <AllUsers></AllUsers>
          
        ),
      },
      {
        path: "addItem",
        element: (
          
            <AddItem></AddItem>
          
        ),
      },
      {
        path: "manageitems",
        element: (
          
            <ManageItems></ManageItems>
         
        ),
      },
    ],
  },
  {
    path: "*", // Match any unrecognized path
    element: <NotFound></NotFound>, // Replace "NotFound" with your own component
  },
]);
