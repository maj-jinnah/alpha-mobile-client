import React from 'react';
import image from '../../../assets/image.jpg'

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 mt-5 pt-3">
                <div className="hero-content flex-col md:flex-row">
                    <img src={image} className="md:w-2/4 rounded-lg shadow-2xl" alt='' />
                    <div className='text-center'>
                        <h1 className="text-4xl font-bold">Weeding Photography!</h1>
                        <p className="py-6 text-lg">Highlight your best photos of florals in this fun florist feature. (You're welcome for that delightful alliterative experience.) Don't forget to showcase centerpieces, boutonnieres, aisle runners, and any other fun florals you can think of!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;