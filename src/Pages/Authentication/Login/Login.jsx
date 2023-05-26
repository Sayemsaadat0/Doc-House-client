import React from 'react';
import './Login.css'
import loginImage from '../../../assets/Login/1.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row h-screen ">
            <Helmet>
                <title>login</title>
            </Helmet>
            <div className="grid left_div flex-grow card items-center justify-center h-screen mt-16">

                <img className='mt-0 h-[560px]' src={loginImage} alt="" />

            </div>

            <div className="grid flex-grow card bg-white place-items-center h-screen mt-16">
                <div className="hero min-h-screen bg-white">
                    <div className="hero-content flex-col border-2 border-slate-200  rounded-lg p-10">
                        <h3 className='text-3xl font-bold'>sign in to the doc</h3>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-white">

                            <form>
                                <div className="form-control ">
                                    <label
                                        className="label clear-left">
                                        <span className="label-text font-bold">Username or Email Address
                                        </span>

                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your username or Email Address" className="input input-bordered bg-teal-50" />
                                </div>

                                <div className="form-control">
                                    <label
                                        className="label">
                                        <span className="label-text font-bold">Password
                                        </span>

                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="Enter Your password"
                                        className="input input-bordered bg-teal-50" />
                                    <label
                                        className="label">
                                        <a href="#" className="
                                        text-[#f68d60d3]
                                        label-text-alt link link-hover">
                                            Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className='btn bg-[#f68d60d3] border-none ' />
                                </div>
                            </form>
                            <div className='mt-4'>
                                <p 
                                className='text-sm font-extralight'>
                                    please Register First. Go To 
                                    <Link to='/register'
                                     className='font-semibold text-[#f68d60d3] mx-1 uppercase'>
                                    Register
                                    </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;