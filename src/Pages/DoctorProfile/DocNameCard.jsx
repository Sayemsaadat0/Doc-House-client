import React from 'react';

const DocNameCard = () => {
    return (
        <div>
            <div className='mt-20 p-10 '>
                <div className="bg-base-200 p-10 rounded-md flex justify-evenly">
                  <div className='w-1/4'>
                    <img className='rounded-md shadow-lg shadow-black h-[300px]' src="https://i.pinimg.com/564x/70/9b/68/709b68ca1caf93bbf335608bb5808db1.jpg" alt="" />
                  </div>
                  <div className='w-3/4 my-4 px-10'>
                    <p className='text-4xl font-semibold mb-4'>namenaname</p>
                    <p className='mb-3'>medical college</p>
                    <p className='mb-3'>ratings</p>
                    <p>address</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default DocNameCard;