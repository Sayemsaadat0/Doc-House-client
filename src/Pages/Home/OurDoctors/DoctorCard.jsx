import React from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import useDetails from '../../../Hooks/UseDetails';
import './Doctor.css'


const DoctorCard = () => {
    const [details] = useDetails()
    return (
        <div className=''>
            <Flicking
                align="prev"
                circular={true}
                onMoveEnd={e => {
                    console.log(e);
                }}>
                {
                    details.map(detail =>   <div key={detail._id} className="panel">
                    <div className="card  card-compact mx-10 bg-base-100 h-[550px] w-[360px] shadow-xl">
                        <div className='p-4'>
                            <img className='rounded-md' src={detail.card_cover} alt="Shoes" />
                        </div>
                        <div className="p-4">
                            <h2 className="card-title mt-2">{detail.name}</h2>
                            <p className='mt-3'>{detail.job}</p>
                            <p className='mt-3'>{detail.ratings}</p>
                            <div className='mt-3 mb-4'>
                                <p className='mt-3'>{detail.address}</p>
                                <p className='mt-3'>{detail.active_hour}</p>
                                <p className='mt-3'>${detail.priice}</p>
                            </div>
                        </div>
                        <div>
                            <button className='w-full absolute bottom-1 view_details'>view details</button>
                        </div>
                    </div>

                </div>)
                }
              
            </Flicking>

        </div>
    );
};
/* 

*/
export default DoctorCard;


/* 


*/