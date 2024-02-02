import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeatureImg from "../../../assets/home/featured.jpg";
import './Feature.css';
const Featured = () => {
  return (
    <section className="lg:my-16 feature-bg pt-10 bg-fixed">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6  shadow-xl p-8 bg-slate-500 bg-opacity-60">
        <figure>
          <img
            className="lg:w-[560px] lg:h-[380px]"
            src={FeatureImg}
            alt="FeatureImg"
          />
        </figure>
        <div className="my-28">
          <h2 className="text-white">
            March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </h2>
          <button className="btn btn-outline border-0 border-b-4 px-12  my-7">Order Now</button>
        
        </div>
       
          
      </div>
    </section>
  );
};

export default Featured;
