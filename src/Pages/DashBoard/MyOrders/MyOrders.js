import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookingsPhone = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mt-2'>
            <h3 className="ml-5 text-3xl font-semibold">My Orders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-5 mt-5">
                {
                    bookingsPhone.map((phone, i) => <div key={i}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure className='h-60'><img src={phone?.phoneImageURL} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{phone?.phoneName}</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;


