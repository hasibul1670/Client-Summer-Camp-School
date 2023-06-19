import React, { useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const NavBar = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  useEffect(() => {
    // This function will be called every time the state changes
    if (isDarkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="navbar bg-blue-200 fixed  z-10 bg-opacity-30 max-w-screen-xl font-bold ">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#">Menu Item 1</a>
              </li>
              <li>
                <a href="#">Menu Item 2</a>
              </li>
              <li>
                <a href="#">Menu Item 3</a>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#">Menu Item 4</a>
            </li>
            <li>
              <a href="#">Menu Item 5</a>
            </li>
            <li>
              <a href="#">Menu Item 6</a>
            </li>
            <li>
              <a href="#">Menu Item 6</a>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="w-5 h-10 
          md:w-10
          md:h-10
          lg:w-10
        lg:h-10"
        />

        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
