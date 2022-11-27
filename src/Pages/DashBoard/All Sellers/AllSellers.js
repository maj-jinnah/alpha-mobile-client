import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const { data: allSellers = [] } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allsellers`)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='mt-2'>
            <h1 className="ml-5 mb-5 text-3xl font-semibold">All Sellers</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label></label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allSellers.map((seller, i) => <tr key={i}>
                                <th><label></label></th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={seller.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div><div className="font-bold">{seller.userName}</div></div>
                                    </div>
                                </td>
                                <td>{seller.userEmail}</td>
                                <td><button className='btn btn-warning btn-sm'>Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;