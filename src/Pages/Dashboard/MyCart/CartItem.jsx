import React from "react";

const CartItem = ({ cartItem, index ,handleDelete}) => {
  const { name, image, price} = cartItem;

  
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{name}</span>
      </td>
      <td>${price}</td>
      <td>
        <button  onClick={() => handleDelete(cartItem)} className="btn btn-ghost bg-base-300 btn-xs">Delete</button>
      </td>
      

    </tr>
  );
};

export default CartItem;
