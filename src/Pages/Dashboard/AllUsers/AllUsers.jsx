import { useQuery } from "@tanstack/react-query";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashCan, FaUserShield } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsers = () => {
  const {
    isPending,
    refetch,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });
  if (isPending) {
    return (
      <h1 className="text-5xl flex justify-center items-center">Loading...</h1>
    );
  }

  const handleDelete = (user) => {
    console.log(user);
  };
  const handleMakeAdmin = (user) => {
    console.log(user)
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
    method:'PATCH',

})
.then(res => res.json())
.then(data =>{
    if(data.modifiedCount > 0){
        refetch()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin now !!`,
            showConfirmButton: false,
            timer: 1500
          });
    }
})
}
  return (
    <div className="my-8 w-full">
      <SectionTitle
        heading="MANAGE ALL USERS"
        subHeading="---How many??---"
      ></SectionTitle>
      <div className="lg:mx-16 bg-base-300 lg:p-9 h-auto w-full">
        <h3 className=" text-2xl p-2">Total users: {users.length} </h3>
        <div className="overflow-x-auto lg:px-6 mt-6">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>EMAIL </th>
                <th>ACTION</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link onClick={() => handleMakeAdmin(user)} className="text-[24px]">{user.role === "admin" ? (
                      "admin"
                    ) : (
                      <FaUserShield></FaUserShield>
                    )}</Link>
                  </td>
                  <td>
                    <Link
                      onClick={() => handleDelete(user)}
                      className="text-[32px]"
                    >
                      <FaTrashCan></FaTrashCan>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
