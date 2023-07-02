/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import image from "../../assets/home/404.png";
const CourseCard = ({ course }) => {
  const { id, title, startMonth, endMonth, year } = course;
  return (
    <div className="card w-64 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
      <figure className="px-6 pt-2">
        <img src={image} alt="Course" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="text-cyan-400 ">Course Id : {id}</h6>
        <h6 className="font-bold  ">{title}</h6>
        <h6 className="text-cyan-400 ">
          {startMonth} to {endMonth} -{year}{" "}
        </h6>

        <p>$45.95</p>

    

        <Link to={`/courses/${id}`}>
          <button className="btn  btn-primary  btn-sm">Enroll Now</button>
        </Link>
        
      </div>
    </div>
  );
};

export default CourseCard;
