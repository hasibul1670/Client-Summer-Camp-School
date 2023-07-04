/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useCart from "../Hooks/useCart";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const loginUser = async (userData) => {
    setLoading(true);
    const response = await fetch(
      "https://summer-camp-school-server-sigma.vercel.app/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.status === 401) {
      throw new Error("Incorrect  Password !!!");
    }
    if (response.status === 404) {
      throw new Error("User not Found ! Please Sign up");
    }

    return response.json();
  };
  const createUser = async (userData) => {
    const response = await fetch(
      "https://summer-camp-school-server-sigma.vercel.app/api/v1/students/create-student",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.status === 400) {
      throw new Error("Field is Empty!!!");
    }
    if (response.status === 409) {
      throw new Error("Email already exists !!");
    }
    if (response.status === 404) {
      throw new Error("Internal Server Error !! please try again later");
    }

    return response.json();
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    setUser({ accessToken, email });
  }, []);

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser(null);

  };

  const authInfo = {
    user,
    setUser,
    createUser,
    loading,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
