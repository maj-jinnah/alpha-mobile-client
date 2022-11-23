import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/errorimg/error.jpg'

const ErrorPage = () => {
    return (
        <div className='text-center h-screen bg-slate-200'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl md:text-5xl font-semibold mt-12 mb-4'>Whoops!</h1>
                <h1 className='text-lg md:text-2xl mb-5 font-medium'>404 Page Not Found</h1>
                <img className='w-2/3 md:w-2/5 lg:w-2/6 rounded-xl' src={img} alt="" />
                <p className='mt-3 text-2xl font-medium'>Looks like this page went on vacation..</p>
                <p className='mt-4 text-lg font-medium'>Try out <Link to='/' className='text-orange-400 link link-accent'>homepage</Link> or <Link to='/blogs' className='text-orange-400 link link-accent'>blog</Link> instead..</p>
            </div>
        </div>
    );
};

export default ErrorPage;