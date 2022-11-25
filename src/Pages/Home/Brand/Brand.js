import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCard from './BrandCard';

const Brand = () => {
    
    const brands = useLoaderData()

    return (
        <div className='my-10'>
            <h1 className="text-4xl font-semibold text-center">Chose your mobile brand.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 mx-5'>
                {
                    brands.map(brand => <BrandCard
                        key={brand._id}
                        brand={brand}
                    ></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;