import React, { useState } from 'react';
import Sectiontitle from '../Shared/Sectiontitle/Sectiontitle';
import Cover from '../Shared/Cover/Cover';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const Appoinment = () => {
    const [selectedDay, setSelectedDay] = useState();
    const footer = selectedDay ? (
        <p>You selected {format(selectedDay, 'PPP')}.</p>
    ) : (
        <p>Please pick a day.</p>
    );
    return (
        <div>
            <Cover title={'Apponment'} subTitle={'home | jdjdjd'}></Cover>
            <div className='flex'>
                <div className='w-1/2'>
                    <img src="https://i.pinimg.com/564x/a8/35/4e/a8354e101c5fcc9230fc18d9eb23198c.jpg" alt="" />
                </div>
                <div className='mx-20 w-1/2 flex justify-around'>
                    <DayPicker
                        className='w-10'
                        mode="single"
                        selected={selectedDay}
                        onSelect={setSelectedDay}
                        footer={footer}
                    />

                </div>

            </div>
        </div>
    );
};

export default Appoinment;