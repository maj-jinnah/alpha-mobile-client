import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import PhoneCard from './PhoneCard';

const Phones = () => {

    const phones = useLoaderData()
    const [phoneDetail, setPhoneDetail] = useState(null)

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center my-5'>Right now we have {phones.length} phones for you.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 mx-5'>
                {
                    phones.map(phone => <PhoneCard
                        key={phone._id}
                        phone={phone}
                        setPhoneDetail={setPhoneDetail}
                    ></PhoneCard>)
                }
            </div>
            <div>
                {phoneDetail &&
                    <Modal
                        phoneDetail={phoneDetail}
                    ></Modal>}
            </div>
        </div>
    );
};

export default Phones;