/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import { router } from "./Routes/Routes";
import store from "./redux/store";

export const userDataContext = createContext();
export const loggedInContext = createContext();

const App = () => {
  const { user } = useAuth();
  const [loggInUser, setLoggInUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (user && user.email) {
        setLoading(true);

        try {
          const response = await axios.get(
            `https://summer-camp-school-server-sigma.vercel.app/api/v1/students/${user.email}`
          );

          if (response?.data?.data !== null) {
            setLoggInUser(response?.data?.data);
          }
          setLoading(false);
        } catch (err) {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        setLoading(true);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    };
    fetchData();
  }, [token]);


  return (
    <div>
      <loggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
        <userDataContext.Provider value={[loggInUser]}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
          <Toaster />
        </userDataContext.Provider>
      </loggedInContext.Provider>
    </div>
  );
};

export default App;
