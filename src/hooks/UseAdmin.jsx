import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
  const { user ,loading} = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      console.log('isAdmin is already loaded',user);
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      
      return res.data?.admin;
    },
  });
  return [isAdmin,isAdminLoading];
};

export default UseAdmin;
