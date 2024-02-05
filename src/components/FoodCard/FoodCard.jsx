import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../../hooks/UseCart";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCart();
  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user?.email,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
      
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Item Added to Cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  
    else {
      Swal.fire({
        title: "please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card  bg-base-100 shadow-xl p-4 ">
      <figure>
        <img className="h-72 w-full" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-950 text-white">
        ${price}
      </p>
      <div className=" text-center m-4">
        <h2 className="">{name}</h2>
        <p>{recipe}</p>
      </div>
      <div className="text-center">
        <button
          onClick={() => handleAddToCart(item)}
          className="btn btn-outline border-0 border-b-4 px-12  my-7"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
