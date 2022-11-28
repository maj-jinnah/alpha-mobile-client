import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdvertisedItems = () => {

    const { data: myadvertises = [], refetch } = useQuery({
        queryKey: ['myadvertise'],
        queryFn: async () => {
            const res = await fetch(`https://alpha-mobile-server-flax.vercel.app/myadvertise`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap5'>
            {
                myadvertises.map((adv, i) => <div key={i}>
                    <div className="card bg-base-100 shadow-xl mt-5">
                        <figure className='h-64'><img src={adv.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {adv.name}
                                <div className="badge badge-secondary">Available Now</div>
                            </h2>
                            <p>{adv.description}</p>
                            <div className="card-actions justify-end">

                                <div className="badge badge-secondary">{adv.sellingPrice} Taka Only</div>

                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AdvertisedItems;