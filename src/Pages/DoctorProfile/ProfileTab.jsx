import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useReview from '../../Hooks/UseReview';

const ProfileTab = () => {
    const [review] = useReview()
    return (
        <section className='h-screen px-10'>
            <Tabs className='p-10 bg-base-200  '>
                <TabList className='flex justify-evenly border-2 border-slate-100'>
                    <Tab className='py-2 w-full border-none 
                    hover:border-none text-white
                    bg-[#f9c2ac]
                    px-6 hover'>OverView</Tab>

                    <Tab className='py-2 w-full border-none 
                    hover:border-none text-white
                    bg-[#f9c2ac]
                    px-6 hover'>Location</Tab>
                    <Tab className='py-2 w-full border-none 
                    hover:border-none 
                    text-white
                  bg-[#f9c2ac]
                    px-6 hover'>Reviews</Tab>
                    <Tab className='py-2 w-full border-none 
                    hover:border-none text-white
                   bg-[#f9c2ac]
                    px-6 hover'>Business Hours</Tab>
                </TabList>

                <div className='mt-5 px-4'>
                    {/* pannel for overView */}
                    <TabPanel>
                        <h2 className='mb-3 text-xl font-semibold'>About Me</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea velit quam voluptate voluptas dolores modi eveniet itaque explicabo, ipsam rem tempore consequatur neque, consequuntur adipisci repellat deleniti nulla, commodi necessitatibus molestiae! Harum ullam soluta, ipsum illum modi, optio nesciunt incidunt cum, temporibus debitis maxime aspernatur delectus!</p>
                        <div>
                            <div className="flex mt-4 flex-col w-full 
                            lg:flex-row">
                                {/* left side */}
                                <div className="grid flex-grow  card ">
                                    {/* educatin */}
                                    <div>
                                        <h2 className='mb-3 text-xl font-semibold'>educaion</h2>
                                        <ul className='list-disc px-10'>
                                            <li className='list'>a</li>
                                            <p>bbb</p>
                                            <li className='list'>a</li>
                                            <p>bbb</p>
                                            <li className='list'>a</li>
                                            <p>bbb</p>
                                        </ul>
                                    </div>
                                    {/* work and experience */}
                                    <div>
                                        <h2 className='mb-3 text-xl font-semibold'>work</h2>
                                        <ul className='list-disc px-10'>
                                            <li className='list'>a</li>
                                            <p>bbb</p>
                                            <li className='list'>a</li>
                                            <p>bbb</p>
                                            <li className='list'>a</li>
                                            <p>bbb</p>

                                        </ul>
                                    </div>
                                    {/* service */}
                                    <div>
                                        <h2 className='mb-3 text-xl font-semibold'>service</h2>
                                        <ul className='list-disc px-10'>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>

                                        </ul>
                                    </div>
                                </div>
                                {/* right side */}
                                <div className="grid flex-grow card">
                                    {/* awaard */}
                                    <div>
                                        <h2 className='mb-3 text-xl font-semibold'>award</h2>
                                        <ul className='list-disc px-10'>
                                            <li className='list'>a</li>
                                            <p>bbb</p>
                                            <li className='list'>a</li>
                                            <p>bbb</p>
                                            <li className='list'>a</li>
                                            <p>bbb</p>
                                        </ul>
                                    </div>
                                    {/* specialize */}
                                    <div>
                                        <h2 className='mb-3 text-xl font-semibold'>specialize</h2>
                                        <ul className='list-disc px-10'>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>
                                            <li className='list'>a</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    {/* pannel for Location */}
                    <TabPanel>
                        <h2>Location</h2>
                    </TabPanel>
                    {/* pannel for reviews */}
                    <TabPanel>
                        <h2>
                            <div className='mt-10'>
                                <Swiper
                                    navigation={true}
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper">
                                    {
                                        review.map(review =>
                                            <SwiperSlide key={review._id}>
                                                <div className="flex flex-col w-full lg:flex-row">
                                                    {/* divider 1 */}
                                                    <div
                                                        className="grid flex-grow   rounded-box md:w-1/2 mx-6">
                                                        <div className="card shadow-xl">
                                                            <div className="card-body">
                                                                <div className='flex gap-4'>
                                                                    <div>
                                                                        <img className='w-16 rounded-full ' src={review.picture} alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <h2 className="card-title">{review.name}</h2>
                                                                        <p>{review.job}</p>
                                                                    </div>
                                                                </div>
                                                                <p>{review.comments}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>)}
                                </Swiper>
                            </div>
                        </h2>
                    </TabPanel>
                    {/* pannel for overView */}
                    <TabPanel>
                        <h2>Business hour</h2>
                    </TabPanel>
                </div>
            </Tabs>
        </section>
    );
};

export default ProfileTab;