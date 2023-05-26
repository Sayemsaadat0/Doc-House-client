import React from 'react';

const Information = () => {
    return (
        <section className='mt-10 mx-auto px-10 text-center'>
            <div className='md:grid grid-cols-3 mt-10 text-white text-left'>
                <div className='w-[350px] h-[200px] bg-green-800 p-10 rounded-md my-5 '>
                    <h3 className='mb-3 text-2xl'>opening hour</h3>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
                <div className='w-[350px] h-[200px] bg-[#e89e7efd] p-10 rounded-md my-5 '>
                    <h3 className='mb-3 text-2xl'>our location</h3>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
                <div className='w-[350px] h-[200px] bg-green-800 p-10 rounded-md my-5'>
                    <h3 className='mb-3 text-2xl'>our location</h3>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
        </section>
    );
};

export default Information;