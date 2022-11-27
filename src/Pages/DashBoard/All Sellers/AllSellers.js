import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allsellers`)
            const data = await res.json()
            return data;
        }
    })

    const handelMakeVerify = (email) => {
        fetch(`http://localhost:5000/allsellers/verify?email=${email}`, {
            method: 'PUT',
            headers: {
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Seller successfully verified!")
                    refetch();
                }
            })
    }

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
                                <td>{seller.verified !== true ? <button onClick={() => handelMakeVerify(seller.userEmail)} className='btn btn-primary btn-sm'>Verify</button> : <button className='btn btn-primary btn-sm ' disabled>Verify</button>}</td>
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