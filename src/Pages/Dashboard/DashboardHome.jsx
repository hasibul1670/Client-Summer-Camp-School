import { useState } from "react";
import DashboardOverview from "./DashboardOverview";
import OrdersComponent from "./OrdersComponent";
import SideBar from "./SideBar";

const DashboardHome = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  let mainContent;

  // Render different main content components based on the active menu item
  if (activeMenu === "dashboard") {
    mainContent = <DashboardOverview />;
  } else if (activeMenu === "orders") {
    mainContent = <OrdersComponent />;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-gray-700 text-white min-h-screen w-full lg:w-1/6">
      <SideBar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      </div>

      <div className="bg-gray-100 flex-grow">
        <header className="bg-white shadow-md p-4">
          {/* Header content goes here */}
          <h1 className="text-gray-800 text-xl">Dashboard</h1>
        </header>

        <main className="p-4">{mainContent}</main>
      </div>
    </div>
  );
};

export default DashboardHome;
