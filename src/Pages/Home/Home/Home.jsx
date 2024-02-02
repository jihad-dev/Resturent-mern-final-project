import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import RecommendsItems from "../RecommendsItems/RecommendsItems";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <RecommendsItems />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
