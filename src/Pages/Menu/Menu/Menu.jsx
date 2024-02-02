import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import Img from "../../../assets/menu/menu-bg.jpg";
import PizzaImg from "../../../assets/menu/pizza-bg.jpg";
import DessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import supImg from "../../../assets/menu/soup-bg.jpg";
import UseMenu from "../../../hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
 

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro | Our Menu</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* main cover */}
      <Cover img={Img} title="OUR MENU"></Cover>
      {/* section title  */}
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>

      {/* offered menu items */}

      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items  */}
      <MenuCategory items={desserts} title="dessert" img={DessertImg}></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title="pizza" img={PizzaImg}></MenuCategory>
      {/* salad menu items */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      {/* sup menu items */}
      <MenuCategory items={soup} title="soup" img={supImg}></MenuCategory>
    </div>
  );
};

export default Menu;
