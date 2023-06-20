import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import img404 from "../../assets/home/404.png";

const Category = () => {
  const coursesData = [
    {
      courseTitle: "C++ Programming",
      courseDescription: "Learn the fundamentals of C++ programming language.",
    },
    {
      courseTitle: "C# Programming",
      courseDescription:
        "Discover the power of C# programming language for building applications.",
    },
    {
      courseTitle: "Advanced C++",
      courseDescription:
        "Take your C++ skills to the next level with advanced topics and techniques.",
    },
    {
      courseTitle: "Mastering C#",
      courseDescription:
        "Become an expert in C# with in-depth knowledge and practical projects.",
    },
  ];

  return (
    <section>
      <SectionTitle heading={"New Launched Courses "}></SectionTitle>
      <Marquee pauseOnClick speed={20}>
        <div className="flex gap-5 m-10">
          {coursesData.map((slide, index) => (
            <Link to="course/programming" key={index}>
              <div className="card w-64 border-solid border-2 border-sky-500 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={img404} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{slide.courseTitle}</h2>
                  <p>{slide.courseDescription}</p>
                  <div className="card-actions">
                    <button className="btn btn-outline btn-primary">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Category;
