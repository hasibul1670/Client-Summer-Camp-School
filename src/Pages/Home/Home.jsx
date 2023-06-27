import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Courses from "./Courses";
import FAQ from "./FAQ";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Summer Camp School | Home</title>
      </Helmet>
    
      <Banner />

      <Category />

      <Courses />

      <FAQ />
    </div>
  );
};

export default Home;
