import { Helmet } from "react-helmet-async";
import CategoryCard from "./CategoryCard";

const Course = () => {
  return (
    <div className="bg-gray-400">
      <Helmet>
        <title> Sunlight Academy | Category </title>
      </Helmet>

      <div className=" py-4">
        <div className=" ">
          <div className="flex justify-center  px-4">
            <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
          </div>

          <div className="flex  justify-center px-4">
           
              <CategoryCard />
         
          </div>

        </div>
      </div>
    </div>
  );
};

export default Course;
