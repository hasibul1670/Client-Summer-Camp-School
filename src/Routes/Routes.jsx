import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Course from "../Pages/Courses/Course";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Event from "../Pages/Events/Event";
import Login from "../Pages/Login/Login";
import AboutUs from "../Pages/Shared/AboutUs";
import NotFound from "../Pages/Shared/NotFound";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "./../Pages/Home/Home";
import News from "../Pages/Shared/News";

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
        path: "courses",
        element: <Course></Course>,
      },
      {
        path: "events",
        element: <Event></Event>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "news",
        element: <News></News>,
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
