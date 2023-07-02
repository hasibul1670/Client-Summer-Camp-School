/* eslint-disable no-unused-vars */

import { Toaster, toast } from "react-hot-toast";
import useCart from "../../Hooks/useCart";

const SelectedCourses = () => {
  const [cart, refetch] = useCart();
  const cartsArray = cart?.data;

  //   toast.success('Successfully created!');
  //   toast.error('This is an error!');

  if (!cartsArray) {
    return <div>No carts available.</div>;
  }

  if (!Array.isArray(cartsArray)) {
    return <div>No instructors available.</div>;
  }

  const handleCartItemDelete = (id) => {
    fetch(
      `https://summer-camp-school-server-sigma.vercel.app/api/v1/cart/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          refetch();
          toast.success("Successfully  Deleted !");
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="grid  mt-4 md:grid-cols-2 text-black  lg:grid-cols-3  gap-5">
          {cart &&
            cart.data?.map((instructor) => (
              <div key={instructor._id} className="border-3 border-red-800 p-5">
                <h1>{instructor.email}</h1>
                <p> {instructor?.course?.title}</p>
                <button
                  onClick={() => handleCartItemDelete(instructor._id)}
                  className="btn btn-primary"
                >
                  {" "}
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
