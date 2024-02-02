import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const UseCart = () => {
  const { user } =useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const {
    isPending,
    refetch,
    data: cart = [],
  } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`)
      return res.data;
    },
  });

  return [cart, refetch, isPending];
};
export default UseCart;
