import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const email = user?.email;

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        `https://summer-camp-school-server-sigma.vercel.app/api/v1/cart/${email}`
      );
      const data = await response.json();
      return data;
    },
  });

  return [cart, refetch];
};

export default useCart;
