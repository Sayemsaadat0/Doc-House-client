import React, { useContext } from 'react';
import loginImage from '../../../assets/Login/1.png'
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { AuthContext } from '../../../Provider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate()
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)
        createUser(data.email , data.password)
        .then(result=>{
            const logedUser = result.user 
            console.log(logedUser)
            alert('user register')
            navigate('/')
        })
        .catch(error=>console.log(error))
    };
    return (
        <div className="flex flex-col w-full lg:flex-row h-screen">
            <Helmet>
                <title>register</title>
            </Helmet>
            <div className="grid left_div flex-grow card items-center justify-center h-screen mt-16">

                <img className='mt-0 h-[560px]' src={loginImage} alt="" />

            </div>

            <div className="grid flex-grow card bg-white place-items-center h-screen mt-16">
                <div className="hero min-h-screen bg-white">
                    <div className="hero-content flex-col border-2 border-slate-200  rounded-lg p-10">
                        <h3 className='text-3xl font-bold'>sign in to the doc</h3>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-white ">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label
                                        className="label clear-left">
                                        <span className="label-text font-bold">Name
                                        </span>

                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        placeholder="Enter Your Name" className="input input-bordered bg-teal-50" />
                                </div>
                                {/*  */}
                                <div className="form-control">
                                    <label

                                        className="label clear-left">
                                        <span className="label-text font-bold">username
                                        </span>

                                    </label>
                                    <input
                                        type="text"
                                        {...register("username", { required: true })}
                                        placeholder="Enter Your username" className="input input-bordered bg-teal-50" />
                                </div>
                                {/*  */}
                                <div className="form-control">
                                    <label
                                        className="label clear-left">
                                        <span className="label-text font-bold">email
                                        </span>

                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        placeholder="Enter Your email" className="input input-bordered bg-teal-50" />
                                </div>
                                {/*  */}
                                <div className="form-control">
                                    <label
                                        className="label">
                                        <span className="label-text font-bold">Password
                                        </span>

                                    </label>
                                    <input
                                        {...register("password", { required: true })}
                                        type="password"
                                        placeholder="Enter Your password"
                                        className="input input-bordered bg-teal-50" />
                                    {/*  */}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className='btn bg-[#f68d60d3] border-none ' />
                                </div>
                            </form>
                            <div className='mt-4'>
                            <SocialLogin></SocialLogin>
                                <p
                                    className='text-sm font-extralight'>
                                    Already Registerd? Go To
                                    <Link to='/login'
                                        className='font-semibold text-[#f68d60d3] mx-1 uppercase'>
                                        SignIn
                                    </Link></p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Register;