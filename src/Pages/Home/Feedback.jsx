import React, { useEffect, useState } from 'react';
import Sectiontitle from '../Shared/Sectiontitle/Sectiontitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useReview from '../../Hooks/UseReview';
import FeedbackSlide from './FeedbackSlide';


const Feedback = () => {
    const [review] = useReview()
    return (
        <section>
            <Sectiontitle heading={'What Our Patients Says'} subHeading={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}></Sectiontitle>
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
                                <div
                                    className="grid flex-grow  
                         rounded-box md:w-1/2 mx-6">
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
                    </SwiperSlide> 
                    )}
                 
                </Swiper>


            </div>
        </section>
    );
};

export default Feedback;