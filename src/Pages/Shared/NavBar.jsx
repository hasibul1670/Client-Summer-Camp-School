import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const NavBar = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    if (isDarkMode) {
      navbar.style.backgroundColor = "black";
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      navbar.style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [isDarkMode]);

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Course</Link>
      </li>
      <li>
        <Link to="/order/salad">Events</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed  z-10 bg-opacity-30 max-w-screen-xl font-bold ">
        <div className="navbar-start">
          <div className=" dropdown">
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
              className="menu menu-compact bg-gray-400  dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
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

          <Link to="/login">
            {" "}
            <button className="btn btn-outline btn-primary">Sign In</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
