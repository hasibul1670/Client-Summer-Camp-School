/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useInstructor from "../../Hooks/useInstructor";
import InstructorCard from "../Shared/InstructorCard";
import LoadingSpinner from "../Shared/LoadingSpinner";

const SportFitness = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [instructors, loading] = useInstructor();
  const instructorsArray = instructors?.data;

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!instructorsArray) {
    return <div>No instructors available.</div>;
  }


  if (!Array.isArray(instructorsArray)) {
    return <div>No instructors available.</div>;
  }

  return (
    <div>
      <SectionTitle
        data-aos="fade-right"
        data-aos-duration="7000"
        heading={"Meet Our instructors"}
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
          {instructorsArray?.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default SportFitness;
