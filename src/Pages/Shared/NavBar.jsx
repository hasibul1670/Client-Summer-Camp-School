/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AuthContext } from "../../Providers/AuthProvider";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "cupcake"
  );
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark");
    } else {
      setTheme("cupcake");
    }
  }, [isDarkMode]);

  const navOptions = (
    <>
      <li className="nav-link nav-link-ltr ">
        <Link to="/" className="hover:text-white hover:bg-transparent">
          Home
        </Link>
      </li>
      <li className="nav-link nav-link-ltr">
        <Link to="/courses" className="hover:text-white hover:bg-transparent">
          Our Courses
        </Link>
      </li>
      <li className="nav-link nav-link-ltr">
        <Link
          to="/instructors"
          className="hover:text-white hover:bg-transparent"
        >
          Our Instructors
        </Link>
      </li>

      <li className="nav-link nav-link-ltr">
        {user?.email && (
          <Link
            to="/dashboard"
            className="hover:text-white hover:bg-transparent"
          >
            Dashboard
          </Link>
        )}
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar z-10 bg-opacity-50 max-w-screen-2xl text-white bg-black	 ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact  dropdown-content mt-3 p-2 text-primary font-bold shadow  rounded-box w-52 z-50"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Sunlight{" "}
        </Link>
      </div>

      {/* main navbar */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-bold menu-horizontal px-1 ">{navOptions}</ul>
      </div>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="w-5 h-7
          md:w-7
          md:h-7
          lg:w-7
        lg:h-7"
      />

      <div className="navbar-end">
        <Link to="/dashboard/mycart">
          <button className="btn btn-ghost mr-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-outline  badge-primary">+ 0</div>
          </button>
        </Link>

        {user?.email ? (
          <>
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              {" "}
              <button className="btn  btn-primary">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
