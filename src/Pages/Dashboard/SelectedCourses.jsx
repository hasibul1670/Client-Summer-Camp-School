/* eslint-disable no-unused-vars */

import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useGetcartQuery } from "../../redux/features/cart/cartApi";
import LoadingSpinner from "./../Shared/LoadingSpinner";
const SelectedCourses = () => {
  const email = localStorage.getItem("email");
  const { data, isLoading } = useGetcartQuery(email, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 7000,
  });

  const cartData = data?.data;
  let totalPrice = 0;
  if (cartData?.length > 0) {
    cartData.map((f) => {
      totalPrice += f?.course.price ?? 0;
    });
  }

  const handleCartItemDelete = (id) => {
    fetch(`http://localhost:4000/api/v1/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          toast.success("Successfully  Deleted !");
        }
      });
  };

  if (isLoading) {
    <LoadingSpinner />;
  }
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow p-5 h-32 card  rounded-box place-items-center">
        <h1 className="text-red-400 font-bold text-xl">Your Order Summery</h1>
        <div className="mt-2 text-cyan-700 font-bold p-4">
          <p>Total Course : {cartData?.length} </p>
          <p>Total price : {totalPrice} </p>
        </div>
      </div>
      <div className="divider lg:divider-horizontal "></div>
      <div className="grid flex-grow h-96 card  rounded-box place-items-center  overflow-y-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
            {data?.data &&
              data?.data.map((course) => (
                <div
                  key={course._id}
                  className="bg-white rounded-lg p-5 shadow-md"
                >
                  <div className="flex justify-between">
                    <p className="mt-2">{course.course?.id}</p>
                    <button
                      onClick={() => handleCartItemDelete(course?._id)}
                      className="text-2xl text-red-600 text btn-outline ml-10"
                    >
                      <AiFillDelete />
                    </button>
                  </div>

                  <h1 className="text-xl text-cyan-700 font-semibold">
                    {course.course.title}
                  </h1>
                  <h1 className=" font-semibold">
                    category : {course?.course?.category}
                  </h1>
                  <p className=" mb-2 text-cyan-700">
                    price:{course?.course.price}$
                  </p>
                  <Link
                    className="border-1 rounded  bg-teal-400 p-1 "
                    to={`/courses/${course.course?.id}`}
                  >
                    Details
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCourses;
