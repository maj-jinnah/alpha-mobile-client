import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext)

    const { data: myPhones = [], refetch } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handelDelete = id => {
        fetch(`http://localhost:5000/myproduct/${id}?email=${user.email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success("Product successfully deleted!")
                    refetch();
                }
            })
    }


    return (
        <div className='mt-2 mb-10'>
            <h1 className="ml-5 mb-5 text-3xl font-semibold">My Products</h1>
            <div>
                {
                    myPhones.map((phone, i) =>
                        <div key={i}>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure className='h-64'><img src={phone.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{phone.name}</h2>
                                    <p className='text-base'>Selling Price : {phone.sellingPrice} Taka</p>

                                    <div className="card-actions justify-between">
                                        <button onClick={() => handelDelete(`${phone._id}`)} className="btn btn-warning btn-sm">delete</button>
                                        <div>
                                            {
                                                phone.status === true ? <>
                                                    <button className="btn btn-primary " disabled>sold</button>
                                                </> :
                                                    <>
                                                        {/* <button className="btn btn-primary btn-sm">Available </button> */}
                                                        <div className="badge badge-secondary">Available</div>
                                                        <button className="btn btn-primary btn-sm ml-2">Advertise</button>
                                                    </>
                                            }
                                        </div>
                                    </div>
                                    <p>{phone._id}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyProducts;