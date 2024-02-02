import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className="my-10">
      <SectionTitle
        heading={"Popular Menu"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
          popular &&
            popular.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
     <div className="text-center">
     <button className="btn btn-outline border-0 border-b-4 px-12  my-7 ">Order Now</button>
     </div>
    </section>
  );
};

export default PopularMenu;
