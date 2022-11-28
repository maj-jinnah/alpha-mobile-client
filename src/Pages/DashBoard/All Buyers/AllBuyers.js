import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const AllBuyers = () => {

    const { user } = useContext(AuthContext)

    const { data: allBuyer = [], refetch } = useQuery({
        queryKey: ['allbuyers', user.email],
        queryFn: async () => {
            const res = await fetch(`https://alpha-mobile-server-flax.vercel.app/allbuyers?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })


    const handelDelete = email => {
        fetch(`https://alpha-mobile-server-flax.vercel.app/users?email=${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success("Seller successfully deleted!")
                    refetch();
                }
            })
    }

    return (
        <div className='mt-2'>
            <h1 className="ml-5 mb-5 text-3xl font-semibold">All Buyers</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label></label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyer.map((seller, i) => <tr key={i}>
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
                                <td><button onClick={() => handelDelete(seller.userEmail)} className='btn btn-warning btn-sm'>Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;