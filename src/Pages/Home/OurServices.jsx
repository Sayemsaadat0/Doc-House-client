import React from 'react';
import img from '../../assets/home/ourservice (1).png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OurServices = () => {
    return (
        <section className=' md:mt-16'>
            <div className="flex flex-col w-full lg:flex-row">
                {/* devider 1 */}
                <div
                    className="grid flex-grow place-items-center rounded-box md:w-1/2 ">
                    <div>
                        <img className='md:h-[50%] rounded-md' src={img} alt="" />
                    </div>
                </div>

                {/* devider 2 */}
                <div className="grid  flex-grow md:w-1/2 place-items-start rounded-box ">
                    <div className='px-5'>
                        <h2 className='text-3xl font-bold mt-10 mb-5'>Our Services</h2>

                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quibusdam optio. Maiores aut delectus quasi debitis, quidem quisquam esse commodi harum? Est quae officiis quam possimus provident praesentium quaerat doloremque. Est quae officiis quam possimus provident praesentium quaerat doloremque</p>
                        <div className='mt-10'>
                            <Tabs>
                                <TabList className='flex justify-evenly border-2 border-slate-100'>
                                    <Tab
                                        className='
                                    py-2
                                    border-none 
                                    hover:border-none hover:text-white
                                    hover:bg-[#f9c2ac]
                                    px-6 hover'>
                                        Cavity Protection</Tab>

                                    <Tab
                                        className='
                                    py-2
                                    border-none 
                                    hover:border-none hover:text-white
                                    hover:bg-[#f9c2ac]
                                    px-6 hover'>
                                       Cosmic Density</Tab>


                                    <Tab
                                        className='py-2
                                    border-none 
                                    hover:border-none hover:text-white
                                    hover:bg-[#f9c2ac]
                                    px-6 hover'>
                                        Oral surgery</Tab>
                                </TabList>
                                {/* pannels */}
                                <div className='mt-6'>
                                    <TabPanel>
                                        <div className="card  bg-base-100 ">
                                         <img className='rounded-md' src="https://i.ibb.co/S3RyZCT/2.png" alt="Shoes" />
                                            <div className="card-body px-4">
                                                <h2 className="text-2xl font-bold card-title">Electro  Gastrology Therapy</h2>

                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quas nesciunt dolor qui nobis dolorum, nisi harum ipsum sapiente nihil doloribus blanditiis quam omnis quaerat sequi expedita facilis architecto ad placeat unde, eum repudiandae. Commodi excepturi, quasi quo accusantium exercitationem quisquam et itaque, perferendis cumque doloremque vero sequi fuga impedit.</p>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quas nesciunt dolor qui nobis dolorum, nisi harum ipsum sapiente nihil doloribus blanditiis quam omnis quaerat sequi expedita facilis architecto ad placeat unde, eum repudiandae. Commodi excepturi, quasi quo accusantium exerimpedit.</p>
                                                <div className="mt-5">
                                                    <button className="btn btn-outline btn-accent px-7">More Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>




                                    <TabPanel><h2>Any content 2</h2></TabPanel>
                                    <TabPanel><h2>Any content 2</h2></TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurServices;