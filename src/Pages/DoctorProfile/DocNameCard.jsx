import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DocNameCard = () => {
  const doctorData = useLoaderData()
  const {picture ,name,hospital,job,ratings} = doctorData
    return (
        <div>
            <div className='mt-20 p-10 '>
                <div className="bg-base-200 p-10 rounded-md flex justify-evenly">
                  <div className='w-1/4'>
                    <img className='rounded-md shadow-lg shadow-black h-[300px]' src={picture} alt="" />
                  </div>
                  <div className='w-3/4 my-4 px-10'>
                    <p className='text-4xl font-semibold mb-4'>{name}</p>
                    <p className='mb-3'>{hospital}</p>
                    <p className='mb-3'>{ratings}</p>
                    <p>{job}</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default DocNameCard;