import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useReview from '../../Hooks/UseReview';

const FeedbackSlide = () => {
    const [review] = useReview()
    return (
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
    );
};

export default FeedbackSlide;