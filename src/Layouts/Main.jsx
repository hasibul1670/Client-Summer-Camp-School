import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";


const Main = () => {
  //  const location = useLocation();

  //const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

  return (
    <div>
      {<NavBar></NavBar>}
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
