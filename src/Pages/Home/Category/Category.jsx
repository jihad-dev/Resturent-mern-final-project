import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Category = () => {
  return (
    <section>
        <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"ORDER ONLINE"}></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className=" lg:text-4xl text-3xl font-bold -mt-20 text-green-600 text-center">SALADS</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className=" lg:text-4xl text-3xl font-bold -mt-20 text-green-600 text-center">PIZZA</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className=" lg:text-4xl text-3xl font-bold -mt-20 text-green-600 text-center">SOUPS</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />{" "}
          <h3 className=" lg:text-4xl text-3xl font-bold -mt-20 text-green-600 text-center">DESSERTS</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />{" "}
          <h3 className=" lg:text-4xl text-3xl font-bold -mt-20 text-green-600 text-center">SALADS</h3>
        </SwiperSlide>
    
      </Swiper>



    </section>
  );
};

export default Category;
