import React from 'react';

const RecommendsItem = ({recommendation}) => {
    const {name,image,recipe} = recommendation;
    return (
        <div className="card bg-base-100 shadow-xl mt-5 p-7">
        <figure><img src={image} alt="Shoes" /></figure>
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
        </div>
        <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 px-12 my-5   ">
          Order Now
        </button>
      </div>
      </div>
    );
};

export default RecommendsItem;