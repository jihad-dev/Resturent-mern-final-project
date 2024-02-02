import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items ,title,img}) => {

  return (
    <>
    {title &&  <Cover img={img} title={title} ></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-6">
   
        {items &&
          items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
      </div>
     <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 px-12  my-7">Order Now</button></Link>
    </>
  );
};

export default MenuCategory;
