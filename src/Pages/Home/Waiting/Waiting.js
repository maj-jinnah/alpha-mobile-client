import React from 'react';
import find from '../../../assets/find.jpg';

const Waiting = () => {
    return (
        <div >
            <div className="hero bg-base-200 pb-3 mb-10 mt-5">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img src={find} className="md:w-2/4 rounded-lg shadow-2xl" alt='' />
                    <div className='text-center'>
                        <h1 className="text-4xl font-bold">Buying & Selling is easier from our website! To buy or sell register today.</h1>
                        <h1 className="text-2xl font-bold mt-5">Why you are waiting?</h1>
                        <p className="py-6 text-lg">Find Your desired phone right now!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Waiting;