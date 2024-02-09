import React, { useEffect, useState } from "react";
import RecommendsItem from "./RecommendsItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const RecommendsItems = () => {
  const [recommendsItems, setRecommendsItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const saladItems = data.filter((item) => item.category === "salad");
        setRecommendsItems(saladItems);
      });
   
  }, []);
  return (
    <section>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      ></SectionTitle>
      <div  className="grid md:grid-cols-3 gap-8  ">
        {recommendsItems.slice(1, 4).map((recommendation,i) => (
          <RecommendsItem
            key={i}
            recommendation={recommendation}
          ></RecommendsItem>
        ))}
      </div>
     
    </section>
  );
};

export default RecommendsItems;
