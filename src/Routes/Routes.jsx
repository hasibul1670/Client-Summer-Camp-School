import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutUs from "../Pages/Shared/AboutUs";
import NotFound from "../Pages/Shared/NotFound";
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
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "*", // Match any unrecognized path
    element: <NotFound></NotFound>, // Replace "NotFound" with your own component
  },
]);
