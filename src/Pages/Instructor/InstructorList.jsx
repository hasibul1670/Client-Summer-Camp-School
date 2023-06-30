/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useInstructor from "../../Hooks/useInstructor";
import CourseCard from "../Shared/CourseCard";
import InstructorCard from "../Shared/InstructorCard";
import { Helmet } from "react-helmet-async";

const SportFitness = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [instructors, loading, refetch] = useInstructor();

  const instructorsArray = instructors?.data;

  console.log('Hello instructor ``````````````````````````````` ',instructorsArray);


  if (loading) {
    // Handle loading state
    return <div>Loading...</div>;
  }



  if (!instructorsArray) {
    return <div>No instructors available.</div>;
  }

  return (
    <div>
      <SectionTitle
        data-aos="fade-right"
        data-aos-duration="7000"
        heading={"Our instructors"}
      ></SectionTitle>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex justify-center  container mx-auto mb-5    px-4"
      >

<Helmet>
        <title> Sunlight Academy | Instructors🤵‍♀️ </title>
      </Helmet>
      
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {instructorsArray.map((course) => (
            <InstructorCard key={course._id} course={course}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportFitness;
