import React, { useState } from "react";
import OrderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../hooks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const {category} = useParams();
const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro | Order Food</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mb-4">
      <Cover img={OrderCoverImg} title="Order Food"></Cover>
      </div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
       
        <TabList className='mb-6'>
          {/* <Tab>All</Tab> */}
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
         
        </TabList>
        {/* <TabPanel>
          <OrderTab items={menu}></OrderTab>
        </TabPanel> */}
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
