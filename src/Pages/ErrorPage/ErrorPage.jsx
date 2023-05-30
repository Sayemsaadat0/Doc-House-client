import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto'>
            <img src="https://i.ibb.co/3szZjrH/woops.png" alt="" />

            <div className='mt-5 flex justify-center'>
                <button className="error-btn">
                  <Link className='box' to='/'>Go back Home</Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;