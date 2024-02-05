import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
        {items.slice(1,7).map(item => 
        <FoodCard item={item} key={item._id}>

        </FoodCard> )}
        <h2 className='text-4xl'>show more </h2>
      </div>
    );
};

export default OrderTab;