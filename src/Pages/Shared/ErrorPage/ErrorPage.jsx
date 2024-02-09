import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" ">
      <div className="flex justify-center items-center">
        <img src="https://kachabazar-store-nine.vercel.app/404.svg" alt="" />
      </div>
      <div className="flex items-center justify-center ">
        <div className="my-2 p-3 font-semibold">
          <h2>Something went wrong!</h2>
          <h3 className="mb-5">Sorry, We can’t find the page you’re looking for.</h3>
        
          <Link to='/' class="bg-[#34D399] px-4 py-3 text-center text-sm font-semi">
          Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
