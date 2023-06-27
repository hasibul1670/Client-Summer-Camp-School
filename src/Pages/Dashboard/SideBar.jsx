/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ activeMenu, onMenuClick }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleMenuItemClick = (menu) => {
    onMenuClick(menu);
    setDrawerOpen(false);
  };

  return (
    <div className="w-full lg:w-1/4">
      {/* Drawer Toggle Button */}
      <label
        htmlFor="drawer-toggle"
        className="block lg:hidden bg-red-800 text-white px-4 py-2 cursor-pointer"
      >
        Open Dashboard
      </label>
      {/* Drawer Content */}
      <input
        type="checkbox"
        id="drawer-toggle"
        className="hidden"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
      />
      <div
        className={`${
          isDrawerOpen ? "block" : "hidden"
        } bg-gray-700 text-white min-h-screen w-full lg:w-auto lg:block lg:relative`}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-gray-700 ${
                  activeMenu === "dashboard" ? "bg-gray-700" : ""
                }`}
                onClick={() => handleMenuItemClick("dashboard")}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-gray-700 ${
                  activeMenu === "orders" ? "bg-gray-700" : ""
                }`}
                onClick={() => handleMenuItemClick("orders")}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to=""
                className={`block py-2 px-4 rounded hover:bg-gray-700 ${
                  activeMenu === "products" ? "bg-gray-700" : ""
                }`}
                onClick={() => handleMenuItemClick("products")}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to=""
                className={`block py-2 px-4 rounded hover:bg-gray-700 ${
                  activeMenu === "customers" ? "bg-gray-700" : ""
                }`}
                onClick={() => handleMenuItemClick("customers")}
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                to=""
                className={`block py-2 px-4 rounded hover:bg-gray-700 ${
                  activeMenu === "reports" ? "bg-gray-700" : ""
                }`}
                onClick={() => handleMenuItemClick("reports")}
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                to=""
                className={`block py-2 px-4 rounded hover:bg-gray-700 ${
                  activeMenu === "settings" ? "bg-gray-700" : ""
                }`}
                onClick={() => handleMenuItemClick("settings")}
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
