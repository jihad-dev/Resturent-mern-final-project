import React from 'react';

const MenuItem = ({item}) => {
    
    const {name,image,recipe,price} = item;
   
    return (
        <div className='flex space-x-5 p-3'>
            <img style={{borderRadius:"0px 200px 200px 200px"}} className='w-[120px] ' src={image} alt="" />
            <div>
                <h3 className='uppercase '>{name} -------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
           
        </div>
    );
};

export default MenuItem;