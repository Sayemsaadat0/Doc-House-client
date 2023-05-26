import React from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const DoctorCard = () => {
    return (
        <div className=''>
             <Flicking
    align="prev"
    circular={true}
    onMoveEnd={e => {
      console.log(e);
    }}>
    <div className="panel">
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
    <div className="panel"> <div className="card  card-compact mx-10 bg-base-100 h-[520px] w-[360px] shadow-xl">
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
            </div></div>
    <div className="panel"> <div className="card  card-compact mx-10 bg-base-100 h-[520px] w-[360px] shadow-xl">
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
            </div></div>
  </Flicking>
       
        </div>
    );
};

export default DoctorCard;