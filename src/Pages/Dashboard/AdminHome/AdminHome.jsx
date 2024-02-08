import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBook, FaDollarSign, FaUser, FaUserAlt, FaUsers } from "react-icons/fa";
import { FaCarSide, FaOdysee } from "react-icons/fa6";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="my-6">
      <h1 className="text-4xl p-4 font-bold ">
        Hi, Welcome Back {user?.displayName}
      </h1>
      <div className="stats shadow">
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
