import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CartItem from "./CartItem";
import Swal from "sweetalert2";
import UseCart from "../../../hooks/UseCart";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const MyCart = () => {
  const [cart, refetch, isPending] = UseCart();
  const axiosSecure = UseAxiosSecure();
  if (isPending) {
    return (
      <span className="min-h-screen flex justify-center items-center text-5xl">
        Loading...
      </span>
    );
  }
  // Using reduce to calculate the total amount
  const totalAmount = cart.reduce((sum, item) => {
    return item.price + sum;
  }, 0);
  // cart item delete functionality
  const handleDelete = (item) => {
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
        text: `You won't be able to ${item.name} this!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        // reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .delete(`/carts/${item._id}`)

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
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro | MyCart</title>
        <link rel="shortcut icon" href="" type="" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {cart.length === 0 ? (
        <h2 className="lg:text-5xl text-3xl flex justify-center items-center min-h-screen ">
          Your cart is empty
        </h2>
      ) : (
        <>
          <div className="pt-6">
            <SectionTitle
              heading="MY BOOKINGS"
              subHeading="---Excellent Ambience---"
            ></SectionTitle>
          </div>
          <div className="flex uppercase justify-around  ">
            <h2 className="lg:text-3xl">Total Items : {cart.length} </h2>
            <h2 className="lg:text-3xl">
              Total Price : ${totalAmount.toFixed()}{" "}
            </h2>
            <button className="btn btn-warning btn-sm">PAY</button>
          </div>
          <div className="overflow-x-auto lg:px-6 mt-6">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem, index) => (
                  <CartItem
                    index={index}
                    cartItem={cartItem}
                    key={cartItem._id}
                    handleDelete={handleDelete}
                  ></CartItem>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;
