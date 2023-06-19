/* eslint-disable no-unused-vars */
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCourses from "../../Hooks/useCourses";
import CourseCard from "../Shared/CourseCard";

const Courses = () => {
  const [courses, loading, refetch] = useCourses();
  const courseArray = courses?.data?.data;
  console.log("Hello..............", courseArray);

  if (loading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  if (!courseArray) {
    // Handle cases where courseArray is undefined or null
    return <div>No courses available.</div>;
  }

  return (
    <>
      <SectionTitle heading={"Our Courses "}></SectionTitle>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {courseArray.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
