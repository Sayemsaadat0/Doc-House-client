import React from 'react';
import Image from '../../../assets/shareed/Doctor_Flatline.svg'
import './Cover.css'

const Cover = ({ title, subTitle }) => {
    return (
        <div className='background'>
            <div className='h-[500px] bg-black bg-opacity-40'>
                <div className='flex flex-col  justify-center mx-20 h-full text-white'>
                    <p className='font-extralight'>
                        {subTitle}
                    </p>
                    <h3 className='text-3xl font-semibold'>
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Cover;