import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center mb-10 md:w-4/12 mx-auto  '>
            <p className='text-yellow-400 mb-7 text-xl'>{subHeading}</p>
           <h1 className='text-3xl mt-4 border-y-4 py-4 text-black'> {heading}</h1>
        </div>
    );
};

export default SectionTitle;