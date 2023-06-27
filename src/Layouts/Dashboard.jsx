

import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import DashboardHome from '../Pages/Dashboard/DashboardHome';


const Dashboard = () => {
  return (
    <div>
        <div>
          <DashboardHome/>
          <Outlet></Outlet>
         <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Dashboard;