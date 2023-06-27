

import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import DashboardHome from '../Pages/Dashboard/DashboardHome';
import DashboardNavBar from '../Pages/Dashboard/DashboardNavBar';

const Dashboard = () => {
  return (
    <div>
        <div>
         <DashboardNavBar/>
          <DashboardHome/>
          <Outlet></Outlet>
         <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Dashboard;