import React from 'react';

const Sectiontitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center mt-5 md:mt-20'>
            <h2 className='text-3xl font-bold'>{heading}</h2>
            <p className='md:w-[70%] mx-auto mt-5 font-extralight'>{subHeading}</p>
        </div>
    );
};

export default Sectiontitle;