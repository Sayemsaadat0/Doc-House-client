import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FeedbackSlide from '../Home/FeedbackSlide';
import OverViewTab from './OverViewTab';

const ProfileTab = () => {

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
                        <OverViewTab></OverViewTab>
                    </TabPanel>

                    {/* pannel for Location */}
                    <TabPanel>
                        <h2>Location</h2>
                    </TabPanel>

                    {/* pannel for reviews */}
                    <TabPanel>
                        <FeedbackSlide></FeedbackSlide>
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