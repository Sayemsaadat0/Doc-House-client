import React from 'react';
import './Banner.css'
import image1 from '../../assets/home/bannertitleImage.png'

const Banner = () => {
    return (
        <section className='banner h-[800px] '>
            <div className='h-[800px] bg-black bg-opacity-60 md:flex justify-evenly items-center text-white '>
                <div className='md:w-1/2 pt-20 md:pt-0'>

                        <h1 className='mb-10 text-5xl font-semibold md:w-[75%] mx-auto'>Your Best Medical Help Center</h1>
                        <p className='mb-4  md:w-[75%] mx-auto'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint corrupti ipsa eius at, sunt aliquid aspernatur tenetur aperiam architecto ipsam.
                        </p>
                        <div className='mx-20'>
                        <button className='font-semibold bg-[#f68d60d3] mx-auto btn'>
                            All Services
                        </button>
                        </div>
                

                </div>
                <div className='md:w-1/2'>
                    <img className='w-[500px]' src={image1} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Banner;