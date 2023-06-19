/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import image from "../../assets/home/404.png";
const CourseCard = ({ course }) => {
  const { id, title, startMonth, endMonth, year } = course;
  return (
    <div
      className="card w-64 border-solid border-2 border-sky-500 shadow-xl"
      key={id}
    >
      <figure className="px-10 pt-10">
        <img src={image} alt="Course" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p>Course Id : {id}</p>
        <h5 className="card-title">{title}</h5>
        <h6>
          {startMonth} to {endMonth} -{year}{" "}
        </h6>

        <p>$45.95</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
