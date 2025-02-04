import { useQuery } from "@tanstack/react-query";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashCan, FaUserShield } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet";
import Loader from "../../Shared/Loader/Loader";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    isPending,
    refetch,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  if (isPending) {
    return <Loader></Loader>
  }
  const handleDelete = (user) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `You won't be able to ${user.name} this!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        // reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .delete(`/users/${user._id}`)

            .then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Item has been deleted.",
                  icon: "success",
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your user is safe :)",
            icon: "error",
          });
        }
      });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)

      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin now !!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>Bistro | All Users</title>
      </Helmet>
      
    <div className="my-8 w-full">
      <SectionTitle
        heading="MANAGE ALL USERS"
        subHeading="---How many??---"
      ></SectionTitle>
      <div className="lg:mx-6 bg-base-300 lg:p-9 h-auto w-full">
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
                    <Link
                      onClick={() => handleMakeAdmin(user)}
                      className="text-[24px]"
                    >
                      {user.role === "admin" ? (
                        "admin"
                      ) : (
                        <FaUserShield></FaUserShield>
                      )}
                    </Link>
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
    </>
  );
};

export default AllUsers;
