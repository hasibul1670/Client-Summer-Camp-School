/* eslint-disable react/prop-types */
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";

import useCart from "../../Hooks/useCart";
import { Toaster, toast } from "react-hot-toast";

const CartSlider = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  const [cart, refetch] = useCart();

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
          toast.success("Removed from Cart !!");
        }
      });
  };

  return (
    <div className="p-2 shadow-xl">
      <button onClick={handleClose} className="text-xl btn-outline">
        <AiOutlineClose />
      </button>
      <div className=" mt-4 gap-5">
        {cart &&
          cart.data?.map((cart) => (
            <div key={cart._id} className="border-b-2 border-sky-500 p-5">
              <p> {cart?.course?.id}</p>
              <p className="text-cyan-700 font-bold ">
                {" "}
                {cart?.course?.title}
              </p>
              <p className=" font-bold "> price:{cart?.course?.price}$</p>
              <button
                onClick={() => handleCartItemDelete(cart._id)}
                className="text-xl btn-outline"
              >
                <AiFillDelete />
              </button>
            </div>
          ))}

        <p className="text-xl font-bold text-blue-600">Total Price : 1500 $</p>
      </div>
      <Toaster />
    </div>
  );
};

export default CartSlider;
