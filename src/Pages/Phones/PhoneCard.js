import React from 'react';

const PhoneCard = ({ phone }) => {

    const { name, image } = phone

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='h-60'><img src={image} alt="Shoes" className='' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;