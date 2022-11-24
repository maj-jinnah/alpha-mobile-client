import React from 'react';
import img from '../../../assets/customar.jpg'

const Customar = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">We believe in our customers and seller.</h1>
                        <p className="mb-5">When it comes to our customer satisfaction we are the only ones who value it. We never compromise our quality of service. We always care about our customer service.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customar;