/* eslint-disable no-unused-vars */


import { Toaster, toast } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { removeFromCart } from "../../redux/features/cart/cartSlice";
const SelectedCourses = () => {
  

  const { course, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const cartData = course;

  const totalQuantity = () => {
    if (!Array.isArray(cartData)) {
      return 0;
    }

    let totalQuantity = 0;
    cartData.forEach((book) => {
      totalQuantity += book.quantity;
    });

    return totalQuantity;
  };

  const handleRemoveBookFromCart = (book) => {
    dispatch(removeFromCart(book));
    toast.success("Book Delete From Cart!!");
  };





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
        
          toast.success("Successfully  Deleted !");
        }
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cartData &&
          cartData?.map((course) => (
            
            <div key={course._id} className="bg-white rounded-lg p-5 shadow-md">
                 <p className="mt-2">{course?.id}</p>
              <h1 className="text-xl font-semibold">{course.title}</h1>
              <p className="mt-2 text-cyan-700">price:{course?.price}$</p>
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
