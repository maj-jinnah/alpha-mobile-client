import React from 'react';

const Newslater = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between items-center bg-emerald-100 lg:h-52 p-10'>
            <div className='text-center lg:text-left lg:w-1/2'>
                <h1 className='text-3xl'>Get our latest news!</h1>
                <p>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
            </div>
            <div className='flex'>
                <input type="text" placeholder="Enter Your Email" className="input input-bordered rounded-xl w-72" />
                {/* <input type="text" placeholder="email" name='email' className="input input-bordered" /> */}
                <button className='btn btn-success rounded-xl ml-3'>Get</button>
            </div>
        </div>
    );
};

export default Newslater;