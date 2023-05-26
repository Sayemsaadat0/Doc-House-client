import React from 'react';

const Futar = () => {
    return (
        <footer className="footer md:flex justify-evenly p-10 bg-base-200 mt-24">
            <div className='md:w-1/4'>
            <h1 className='text-3xl font-bold text-[#f68d60d3]'>
                    Doc <span className='text-black'>House</span>
                </h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sunt, a facilis dignissimos perferendis ipsum quod labore repellat sit animi.</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Futar;