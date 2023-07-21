/* eslint-disable no-unused-vars */

import { Toaster, toast } from "react-hot-toast";

import { useGetcartQuery } from "../../redux/features/cart/cartApi";
import LoadingSpinner from "./../Shared/LoadingSpinner";
const SelectedCourses = () => {
  const email = localStorage.getItem("email");
  const { data, isLoading } = useGetcartQuery(email, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 7000,
  });

  const cartData = data?.data;
  if (cartData?.length > 0) {
    let totalPrice = 0;
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
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.data &&
            data?.data.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-lg p-5 shadow-md"
              >
                <p className="mt-2">{course.course?.id}</p>
                <h1 className="text-xl font-semibold">{course.course.title}</h1>
                <p className="mt-2 text-cyan-700">
                  price:{course?.course.price}$
                </p>
                <button
                  onClick={() => handleCartItemDelete(course._id)}
                  className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SelectedCourses;
