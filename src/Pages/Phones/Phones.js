import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from './PhoneCard';

const Phones = () => {

    const phones = useLoaderData()

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center my-5'>Right now we have {phones.length} phones for you.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 mx-5'>
                {
                    phones.map(phone => <PhoneCard
                        key={phone._id}
                        phone={phone}
                    ></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;