import React from 'react';

const OverViewTab = () => {
    return (
        <div>
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
        </div>
    );
};

export default OverViewTab;