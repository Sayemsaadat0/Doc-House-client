import React from 'react';

const DoctorCard = () => {
    return (
        <div className='md:grid grid-cols-3'>
        <div className="card  card-compact mx-10 bg-base-100 h-[520px] w-[360px] shadow-xl">
                <div className='p-4'>
                    <img className='rounded-md' src="https://i.pinimg.com/564x/ea/bf/f6/eabff6fbb7c4b345f1b14ef80e0cab4e.jpg" alt="Shoes" />
                </div>
                <div className="">
                    <h2 className="card-title mt-2">Shoes!</h2>
                    <p className='mt-3'>jjob</p>
                    <p className='mt-3'>ratings</p>
                    <div className='mt-3'>
                        <p className='mt-3'>adress</p>
                        <p className='mt-3'>available time</p>
                        <p className='mt-3'>money</p>
                    </div>
                </div>
                <div>
                    <button className='btn absolute bottom-0 w-full'>view details</button>
                </div>
            </div>

            <div className="card  card-compact mx-10 bg-base-100 h-[520px] w-[360px] shadow-xl">
                <div className='p-4'>
                    <img className='rounded-md' src="https://i.pinimg.com/564x/ea/bf/f6/eabff6fbb7c4b345f1b14ef80e0cab4e.jpg" alt="Shoes" />
                </div>
                <div className="">
                    <h2 className="card-title mt-2">Shoes!</h2>
                    <p className='mt-3'>jjob</p>
                    <p className='mt-3'>ratings</p>
                    <div className='mt-3'>
                        <p className='mt-3'>adress</p>
                        <p className='mt-3'>available time</p>
                        <p className='mt-3'>money</p>
                    </div>
                </div>
                <div>
                    <button className='btn absolute bottom-0 w-full'>view details</button>
                </div>
            </div>
          
            <div className="card  card-compact mx-10 bg-base-100 h-[520px] w-[360px] shadow-xl">
                <div className='p-4'>
                    <img className='rounded-md' src="https://i.pinimg.com/564x/ea/bf/f6/eabff6fbb7c4b345f1b14ef80e0cab4e.jpg" alt="Shoes" />
                </div>
                <div className="">
                    <h2 className="card-title mt-2">Shoes!</h2>
                    <p className='mt-3'>jjob</p>
                    <p className='mt-3'>ratings</p>
                    <div className='mt-3'>
                        <p className='mt-3'>adress</p>
                        <p className='mt-3'>available time</p>
                        <p className='mt-3'>money</p>
                    </div>
                </div>
                <div>
                    <button className='btn absolute bottom-0 w-full'>view details</button>
                </div>
            </div>


        </div>
    );
};

export default DoctorCard;