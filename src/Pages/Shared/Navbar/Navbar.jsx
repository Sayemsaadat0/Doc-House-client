import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navOptions = <>
        <NavLink className='mx-3' to='/'>home</NavLink>
        <NavLink className='mx-3' to='login'>login</NavLink>
        <NavLink className='mx-3' to='/register'>register</NavLink>
        <NavLink className='mx-3' to='/profile'>Doctor Profile</NavLink>
    </>


    return (
        <div className="navbar max-w-screen-xl fixed text-amber-300 md:px-20  bg-opacity-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {navOptions}
                    </ul>
                </div>
                <h1 className='text-3xl font-bold text-[#f68d60d3]'>
                    Doc <span className='text-white'>House</span>
                </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
               {navOptions}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;