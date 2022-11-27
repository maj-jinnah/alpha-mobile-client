import React from 'react';
import { FaGoogle, GoVerified } from 'react-icons/fa';

const PhoneCard = ({ phone, setPhoneDetail }) => {

    const { name, image, seller, verified, location, date, price, sellingPrice, use, sellerMail } = phone

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className='h-60'><img src={image} alt="Shoes" className='' /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold text-center mb-2">{name}</h2>
                    <div>
                        <div>
                            <div className='flex items-center mt-2'>
                                <h1 className="text-xl font-semibold mr-3">{seller}</h1>
                                <div>
                                    {
                                        verified && <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        </p>
                                    }
                                </div>
                            </div>
                            <span className='mr-3 text-base'>{location},</span> <span className='text-base'>{date}</span>
                            <div className='mt-2'>
                                <p className='mr-3 text-lg'>Original Price: {price} Taka</p>
                                <p className='mr-3 text-lg'>Selling price: {sellingPrice} Taka</p>
                                <p className='mr-3 text-lg'>Total using time: {use} years</p>
                                <p>{sellerMail}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <label onClick={() => setPhoneDetail(phone)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;