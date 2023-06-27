import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Login from "../Pages/Login/Login";
import AboutUs from "../Pages/Shared/AboutUs";
import NotFound from "../Pages/Shared/NotFound";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "./../Pages/Home/Home";

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
    ],
  },
  {
    path: "*", // Match any unrecognized path
    element: <NotFound></NotFound>, // Replace "NotFound" with your own component
  },
]);
