import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBook, FaDollarSign, FaUser, FaUserAlt, FaUsers } from "react-icons/fa";
import { FaCarSide, FaOdysee } from "react-icons/fa6";
import Loader from "../../Shared/Loader/Loader";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
 
  const axiosSecure = UseAxiosSecure();
  const { data: stats = [],isPending } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  if(isPending){
  <Loader></Loader>
  }
  return (
    <div className="my-16">
      <h1 className="text-4xl p-4 font-bold ">
        Hi, Welcome Back <span className="stat-value text-primary">{user?.displayName}</span>
      </h1>
      <div className="stats shadow lg:mx-6 bg-base-300 lg:p-9 my-2">
        <div className="stat">
          <div className="stat-figure text-primary">
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value text-primary">${stats.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-secondary">{stats.users}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-3xl"></FaBook>
          </div>
          <div className="stat-title">Total MenuItems</div>
          <div className="stat-value">{stats.menuItems}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCarSide className="text-3xl"></FaCarSide>
          </div>
          <div className="stat-title">Total Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
