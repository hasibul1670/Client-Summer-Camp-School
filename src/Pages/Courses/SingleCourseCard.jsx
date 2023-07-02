/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import image from "../../assets/coursephoto/12.jpg";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useCart from "./../../Hooks/useCart";
import useSingleCourses from "./../../Hooks/useSingleCourses";

const SingleCourseCard = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [course, loading] = useSingleCourses(id);
  const [, refetch] = useCart(); //life lesson  ,,,,, must be entered before refetching
  let courseData;

  if (course && course.data && course.data.length > 0) {
    courseData = course.data[0];
  } else {
    return (
      <div>
        No Course available.
        <LoadingSpinner />;
      </div>
    );
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!courseData) {
    return <div>No Course available.</div>;
  }
  const instructorId = courseData?.instructor?.id;

  const handleCourseEnrolled = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Enrolled successfully.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleCourseAddToCart = () => {
    const cartData = {
      course: courseData?._id,
      email: user?.email,
    };
    const accessToken = localStorage.getItem("token");
    axios
      .post(
        "https://summer-camp-school-server-sigma.vercel.app/api/v1/cart/create-cart",
        cartData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: accessToken,
          },
        }
      )
      .then((response) => {
        const result = response.data;
        if (result?.statusCode === 200) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Course is added to cart successfully ! ❤️ ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        const code = error?.response?.status;

        if (code === 409) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "This Course is already Added to Cart 😒",
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Something Went Wrong!! 404 😭",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Course | {courseData.title}</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="text-xs font-bold">{id}</p>
            <h1 className="text-xl text-cyan-400 font-bold">
              {courseData.title}
            </h1>

            <p className=" text-md font-semibold ">
              Category : {courseData.category}
            </p>

            <p className=" text-md font-semibold ">
              Instructor :{" "}
              <Link
                className="link link-success"
                to={`/instructors/${instructorId}`}
              >
                {courseData?.instructor?.name?.firstName}
              </Link>
            </p>

            <p className=" text-md font-semibold ">
              Course Duration : {courseData.startMonth} to {courseData.endMonth}
            </p>

            <p className=" text-md font-semibold ">
              Price : {courseData.price}$
            </p>

            <p className=" text-md font-semibold ">
              Description :{" "}
              <span className="text-sm text-cyan-800">
                Summer Camp School is an educational institution that offers
                enriching programs during the summer break. Designed for
                children and teenagers, it provides a diverse range of
                activities and courses taught by experienced instructors. From
                outdoor adventures and sports to creative arts and academic
                subjects, Summer Camp School offers a dynamic learning
                environment that fosters personal growth and development.
              </span>
            </p>

            <p className=" text-md font-semibold ">
              Rating : {courseData.rating}
            </p>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <Link>
              <button
                onClick={handleCourseEnrolled}
                className="btn btn-outline btn-sm  "
              >
                Enroll Now
              </button>
            </Link>
            <Link>
              <button
                onClick={handleCourseAddToCart}
                className="btn btn-outline btn-secondary btn-sm mx-2  "
              >
                Add to Cart
              </button>
            </Link>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCard;
